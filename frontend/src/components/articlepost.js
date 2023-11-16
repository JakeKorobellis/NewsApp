import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";
import user from "./pictures/user.png";
import reuse from "./helperfunctions/liveNews";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function ArticlePost() {
  /**
   * Article page
   */

  const route = process.env.REACT_APP_USER_ARTICLE_POST;

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

  //State to record Post data
  const [article, setArticle] = React.useState({
    user: "",
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    /**
     * Updaet stated on each change in form
     */
    const { name, value } = event.target;
    setArticle((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setArticle((prevData) => ({
      ...prevData,
      ["user"]: userData.authData.user._id,
    }));
  };

  const handleSubmit = (event) => {
    /**
     * Prevent default and wait for response from backend to proceed
     * users id is sent on submit only
     */

    event.preventDefault();

    // Sending to backend to add to DB
    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          navigate("/content/articles");
        } else {
          alert("Account already exists!");
        }
      });
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
              <div className="title-all">Create an Article!</div>
              <div className="stream-hold-all191">
                <div className="signup-page-split2">
                  <div className="form2">
                    <form
                      action="/create/post"
                      method="post"
                      className="form"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-inputs2">
                        <label className="resize2">Title</label>
                        <input
                          type="title"
                          id="title"
                          name="title"
                          placeholder="This is the title.."
                          className="inputs-form"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-inputs2">
                        <label className="resize2">Content</label>
                        <textarea
                          type="content"
                          id="content"
                          name="content"
                          placeholder="This is the content..."
                          className="inputs-form2"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <input
                        type="submit"
                        value="Submit"
                        className="login-btn"
                      />
                    </form>
                  </div>
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

export default ArticlePost;
