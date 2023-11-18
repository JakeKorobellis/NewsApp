import React from "react";
import Side from "./sidebar";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import PasswordCheck from "./helperfunctions/passwordCheck";

function PasswordEdit() {
  /**
   * Need to add user auth
   * Need to add password changing
   */

  const navigate = useNavigate();
  const route = process.env.REACT_APP_USER_PASSWORD_ROUTE;
  // User auth
  const token = localStorage.getItem("token");
  const [passwordState, setPasswordState] = React.useState({
    password: "",
    npassword: "",
    cpassword: "",
    _id: "",
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
          setPasswordState({
            ...passwordState,
            _id: data.authData.user._id,
          });
        }
      });
  }, []);

  const handleSubmit = (event) => {
    /**
     * Handle submit of changing password
     */
    event.preventDefault();

    const passwordStatus = PasswordCheck(passwordState.npassword);

    if (!passwordStatus) {
      alert(
        "Please make sure your password contains one digit, one lowercase letter, one uppercase letter, and one special character"
      );
      return;
    }

    // Check new password confirmation before request
    if (passwordState.npassword != passwordState.cpassword) {
      alert("New Password Does Not Mathc");
      return;
    }

    // Sending to backend to add to DB
    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordState),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        } else {
          alert("Current password is incorrect!");
        }
      });
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
                  <form method="post" className="form2" onSubmit={handleSubmit}>
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
                        title="Must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters"
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
                      <div className="form-password-confirmation">
                        Must contain at least one number, one uppercase and
                        lowercase letter, one special character, and at least 8
                        or more characters
                      </div>
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
