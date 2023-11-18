import React from "react";
import Side from "./sidebar";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function PasswordEdit() {
  /**
   * Need to add user auth
   * Need to add password changing
   */

  const navigate = useNavigate();

  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");
  const [passwordState, setPasswordState] = React.useState({
    password: "",
    npassword: "",
    cpassword: "",
  });

  React.useEffect(() => {
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

  const handleSubmit = (event) => {
    /**
     * Handle submit of changing password
     */
    event.preventDefault();
    console.log("Submit");

    // Check new password confirmation before request
    if (passwordState.npassword != passwordState.cpassword) {
      alert("New Password Does Not Mathc");
      return;
    }

    console.log("Post Request");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPasswordState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            <div className="resize-password-edit">
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
                    onSubmit={handleSubmit}
                  >
                    <div className="form-inputs">
                      <label className="resize">Current Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="inputs-form"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">New Password:</label>
                      <input
                        type="password"
                        id="npassword"
                        name="npassword"
                        className="inputs-form"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-inputs">
                      <label className="resize">Confrim New Password:</label>
                      <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        className="inputs-form"
                        placeholder="**********"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form margin-top">
                      {/* a href needs to be removed for backend and input needs to be moved into the form for the POST request to go off*/}
                      <input
                        type="submit"
                        value="Submit Password Changes"
                        className="login-btn"
                      />
                    </div>
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
