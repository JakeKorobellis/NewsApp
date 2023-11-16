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
  const [posts, setPosts] = React.useState([]);

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
          .then((data) => {
            setPosts(data.posts);
          })
      );
  }, []);

  console.log(posts);

  const renderPosts = (callback) => {
    return posts.map((curr) => {
      return (
        <div className="hold-crypto-news2">
          <div className="fifty-five2">
            <strong>{curr.title}</strong> <br />
            {curr.post}
          </div>
          <div className="hold-right2">
            <div className="">{curr.user}</div>

            <div className="small-text-date">
              {convertISOToFormattedDateTime(curr.date)}
            </div>
            <div className="button-article-holder">
              <button
                className="faviortie-btn"
                onClick={() => console.log("like")}
              >
                Like
              </button>
              <button
                className="faviortie-btn"
                onClick={() => console.log("like")}
              >
                Dislike
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

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
              <div className="stream-hold-all192">
                <div className="button-holder-add-post">
                  <button
                    className="button-create"
                    onClick={() => handleClick()}
                  >
                    Create Post
                  </button>
                </div>

                {posts.length > 0 ? (
                  <div className="gap-up">{renderPosts()}</div>
                ) : (
                  <div className="no-content-posts">
                    <h4>There is no content</h4>
                    <h5>Feel free to contribute!</h5>
                  </div>
                )}
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
