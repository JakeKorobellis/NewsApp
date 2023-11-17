import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./helperfunctions/spnningIcon";

function UserEdit() {
  // User auth
  const route = process.env.REACT_APP_USER_EDIT;
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");
  const [changes, setChanges] = React.useState({
    email: "",
    fname: "",
    lname: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    // Auth
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
          // Store users data
          setUserData(data.authData.user);
          // Set the current state to the users personal value s
          setChanges({
            ["fname"]: data.authData.user.fname,
            ["email"]: data.authData.user.email,
            ["lname"]: data.authData.user.lname,
          });
        }
      });
  }, []);

  console.log(changes);

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setChanges((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    // Sending to backend to add to DB
    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          navigate("/useredit");
        } else {
          alert("Error!");
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  /**
   * Still need to add updating data
   * Password vonfrimation etc
   */

  // Render
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
              <LoadingIcon />
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
                      onClick={handleSubmit}
                    >
                      <div className="form-inputs">
                        <label className="resize">First Name:</label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="inputs-form"
                          value={changes.fname}
                          onChange={handleChanges}
                          required
                        />
                      </div>
                      <div className="form-inputs">
                        <label className="resize">Last Name:</label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          className="inputs-form"
                          value={changes.lname}
                          onChange={handleChanges}
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
                          value={changes.email}
                          onChange={handleChanges}
                          required
                        />
                      </div>
                      <a href="/useredit/password" className="login-btn center">
                        Update password
                      </a>
                      <div className="form margin-top">
                        <input
                          type="submit"
                          value="Submit Profile Changes"
                          className="login-btn"
                        />
                      </div>
                    </form>
                  </div>

                  <a
                    href="/login"
                    className="login-btn center-2"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </a>
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
