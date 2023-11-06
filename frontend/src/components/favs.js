import React from "react";
import Side from "./sidebar";
import Header from "./header";

function Fav() {
  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_REMOVE_FAV;

  // Setting data
  const [news, setNews] = React.useState([]);
  const [ready, setReady] = React.useState(false);

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
        //Fetch users favs once authorized
        fetch("/api/news", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.authData.user),
        })
          .then((res) => res.json())
          .then((res) => {
            setNews(res.authData);
          });
      });

    setTimeout(() => {
      setReady(true);
    }, "500");
  }, []);

  // Deleting data from DB
  const handleDelete = (headline, source, url, time, user, url_remove) => {
    const data = {
      headline: headline,
      source: source,
      url: url,
      time: time,
      user: user,
    };

    // Post request to backend
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

  // Redner data
  return (
    <div className="App">
      {userData.account ? (
        <header className="App-header">
          <div class="parent">
            <Header />
            <div class="sidebar">
              <Side curr={8} />
            </div>
            <div class="data stream-all">
              <div className="title-all">Favorites</div>

              <div className="stream-hold-all15">
                {news.fav_news ? (
                  <div className="stream-hold-all15-2">
                    {news.fav_news.length > 0 ? (
                      renderFavs(news.fav_news)
                    ) : (
                      <div className="center-no-favs">
                        No News Articles Added to Favorites
                      </div>
                    )}
                  </div>
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
      ) : (
        <div>
          {ready ? (
            <div className="holder-auth">
              <div className="large-auth">Hold on!</div>
              <div className="short-auth">Do you have an account?</div>
              <div className="auth-link-hold">
                <a href="/login" className="auth-link">
                  Login
                </a>
                <a href="/signup" className="auth-link">
                  Signup
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default Fav;
