import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";

//Current bug - user is required to log out and log back in when adding something to favs
//And when removing from favs

//Display default text if the user does not have any favs
function Fav() {
  const [userData, setUserData] = React.useState([]); //User Data
  const token = localStorage.getItem("token"); // Token from local Storage
  const url = process.env.REACT_APP_REMOVE_FAV;
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    //Fetch current user data
    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setNews(data.authData.user);
      });
  }, []);

  console.log(userData);

  const handleDelete = (headline, source, url, time, user, url_remove) => {
    const data = {
      headline: headline,
      source: source,
      url: url,
      time: time,
      user: user,
    };

    fetch(url_remove, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setNews(res.authData);
      });
  };

  //Render users faviorite news articles
  function renderFavs(list) {
    return list.map((curr) => {
      return (
        <div className="hold-crypto-news">
          <div className="fifty-five">{curr.headline}</div>
          <div className="hold-right">
            <div className="">{curr.source}</div>
            <div className="">
              <a href={curr.url} target="_blank">
                View
              </a>
            </div>
            <div className="small-text-date">{curr.time}</div>
            <div>
              <button
                className="faviortie-btn"
                onClick={() =>
                  handleDelete(
                    curr.headline,
                    curr.source,
                    curr.url,
                    curr.time,
                    userData.authData.user._id,
                    url
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <div class="header">
            <div className="fifityvw ">
              <div className="header-title-format">
                <a href="/" className="default-title">
                  <div className="title-font-large">
                    <span className="neon-blue">N</span>ews
                    <span className="neon-blue">R</span>oom
                    <span className="smaller-title">.com</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="fifityvw2">
              {" "}
              <a href="/useredit">
                <img src={user} className="resize-icon" />
              </a>
            </div>{" "}
          </div>
          <div class="sidebar">
            <Side curr={8} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Favorites</div>

            <div className="stream-hold-all15">
              {userData.authData ? (
                renderFavs(news.fav_news)
              ) : (
                <div className="holder-loader">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Fav;
