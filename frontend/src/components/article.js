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

  const securedRoute = process.env.REACT_APP_SECURED_ROUTE;

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
      .then(setReady(true))
      .then(
        fetch(securedRoute, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(console.log("success"))
      );
  }, []);

  const handleClick = () => {
    navigate("/content/articles/create");
  };

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
              <div className="stream-hold-all19">
                <div className="button-holder-add-post">
                  <button
                    className="button-create"
                    onClick={() => handleClick()}
                  >
                    Create Post
                  </button>
                </div>
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
