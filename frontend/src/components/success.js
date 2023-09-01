import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";

function Success() {
  const [currUser, setCurrUser] = React.useState({
    fname: "John",
    lname: "Doe",
    email: "jdoe@newsroom.com",
    password: "JohnDoe123",
  });

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
            <div className="stream-hold-all11">
              <div className="success">Success!</div>

              <div className="success-hold">
                <div>
                  <a href="/content" className="success-btn">
                    Home
                  </a>
                </div>
                <div>
                  <a href="/" className="success-btn">
                    Logout
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

export default Success;
