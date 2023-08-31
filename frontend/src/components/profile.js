import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";

function UserEdit() {
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
                <div className="title-font-large">
                  <span className="neon-blue">N</span>ews
                  <span className="neon-blue">R</span>oom
                  <span className="smaller-title">.com</span>
                </div>
              </div>
            </div>
            <div className="fifityvw2">
              {" "}
              <a href="/content/split">
                <img src={user} className="resize-icon2" />
              </a>
            </div>
          </div>
          <div class="sidebar">
            <Side />
          </div>
          <div class="data stream-all">
            <div className="title-all">Edit Profile</div>
            <div>Current profile values are populated.</div>
            <div className="stream-hold-all10">
              <div className="signup-page-split">
                <div className="form">
                  <form
                    action="/useredit/update"
                    method="post"
                    className="form"
                  >
                    <div className="form-inputs">
                      <label className="resize">First Name:</label>
                      <input
                        type="fname"
                        id="fname"
                        name="fname"
                        className="inputs-form"
                        value={currUser.fname}
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">Last Name:</label>
                      <input
                        type="lname"
                        id="lname"
                        name="lname"
                        className="inputs-form"
                        value={currUser.lname}
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="inputs-form"
                        value={currUser.email}
                        required
                      />
                    </div>
                    <a href="/useredit/password" className="login-btn center">
                      Update password
                    </a>

                    <input
                      type="submit"
                      value="Submit Profile Changes"
                      className="login-btn"
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

export default UserEdit;
