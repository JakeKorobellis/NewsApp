import React from "react";
import Side from "./sidebar";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function Success() {
  /**
   * Success page once user makes edits to profile
   */

  // User auth
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="data stream-all">
          <div className="stream-hold-all111">
            <div className="success">Your profile has been updated!</div>
            <div className="success-hold">
              <div>
                <h4>Please log back in!</h4>
              </div>
              <div>
                <a
                  onClick={() => handleLogOut}
                  href="/login"
                  className="login-btn center"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Success;
