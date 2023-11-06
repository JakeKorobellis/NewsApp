import React from "react";
import Side from "./sidebar";
import user from "./pictures/user.png";
import Header from "./header";

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
          <Header />
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
