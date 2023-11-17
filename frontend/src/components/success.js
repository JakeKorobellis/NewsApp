import React from "react";
import Side from "./sidebar";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function Success() {
  /**
   * Success page once user makes edits to profile
   */

  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side />
          </div>
          <div class="data stream-all">
            <div className="stream-hold-all111">
              <div className="success">Success!</div>
              <div className="success-hold">
                <div>
                  <h4>Please log back in!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Success;
