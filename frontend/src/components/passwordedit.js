import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";

function PasswordEdit() {
  const [currUser, setCurrUser] = React.useState({
    fname: "John",
    lname: "Doe",
    email: "jdoe@newsroom.com",
    password: "JohnDoe123",
  });

  //Use effect to set the current user when loaded

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
              <a href="/content">
                <img src={user} className="resize-icon2" />
              </a>
            </div>
          </div>
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

                    <input
                      type="submit"
                      value="Submit Password Changes"
                      className="login-btn"
                      href="/"
                    />
                  </form>
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
