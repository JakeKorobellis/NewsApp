import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";
import user from "./pictures/user.png";
import reuse from "./helperfunctions/liveNews";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function ContentArticle() {
  /**
   * Article page
   */

  const navigate = useNavigate();

  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    /**
     * Inital user auth and fetch request
     */

    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 403) {
          navigate("/login");
        } else {
          setUserData(data);
        }
      })
      .then(setReady(true));
  }, []);

  // Render
  return (
    <div className="App">
      {ready ? (
        <header className="App-header">
          <div class="parent">
            <Header />
            <div class="sidebar">
              <Side curr={9} />
            </div>
            <div class="data stream-all">
              <div className="title-all">User Articles</div>
              <div className="stream-hold-all9">
                Articles will be listed here.{" "}
              </div>
            </div>
          </div>
        </header>
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
  );
}

export default ContentArticle;
