import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";
import Header from "./header";

function UserEdit() {
  const [userData, setUserData] = React.useState([]);

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data.authData.user));
  }, []);

  console.log(userData);

  //Use effect to set the current user when loaded

  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side />
          </div>
          {userData == [] ? (
            <div className="holder-loader">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
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
                          value={userData.fname}
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
                          value={userData.lname}
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
                          value={userData.email}
                          required
                        />
                      </div>
                      <a href="/useredit/password" className="login-btn center">
                        Update password
                      </a>
                    </form>
                  </div>
                  <div className="form margin-top">
                    {/* a href needs to be removed for backend and input needs to be moved into the form for the POST request to go off*/}
                    <a href="/success" className="form">
                      <input
                        type="submit"
                        value="Submit Profile Changes"
                        className="login-btn"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default UserEdit;
