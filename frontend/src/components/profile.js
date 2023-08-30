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
            <div className="stream-hold-all"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default UserEdit;
