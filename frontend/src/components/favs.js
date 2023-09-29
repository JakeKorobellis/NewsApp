import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";
// Need to dynamically render users fav news articles
// Obtain user data thru JWT
// Render
//Display default text if the user does not have any favs
function Fav() {
  const [userData, setUserData] = React.useState([]); //User Data
  const token = localStorage.getItem("token"); // Token from local Storage

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
      .then((data) => setUserData(data));
  }, []);

  console.log(userData);

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
              <div className="holder-loader">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Fav;
