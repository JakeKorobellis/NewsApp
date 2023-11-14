import React from "react";
import Side from "./sidebar";
import Header from "./header";

function PasswordEdit() {
  /**
   * Need to add user auth
   * Need to add password changing
   */

  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useState(() => {
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
      });
  }, []);

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side />
          </div>
          <div class="data stream-all">
            <div className="title-all">Update Password</div>
            <div>
              Please confrim your current password, then input the one you would
              like!
            </div>
            <div className="stream-hold-all10">
              <div className="signup-page-split">
                <div className="form">
                  <form
                    action="/useredit/password/update"
                    method="post"
                    className="form"
                  >
                    <div className="form-inputs">
                      <label className="resize">Current Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="inputs-form"
                        placeholder="**********"
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">New Password:</label>
                      <input
                        type="password"
                        id="npassword"
                        name="password"
                        className="inputs-form"
                        placeholder="**********"
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">Confrim New Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="cpassword"
                        className="inputs-form"
                        placeholder="**********"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="form margin-top">
                  {/* a href needs to be removed for backend and input needs to be moved into the form for the POST request to go off*/}
                  <a href="/success" className="form">
                    <input
                      type="submit"
                      value="Submit Password Changes"
                      className="login-btn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default PasswordEdit;
