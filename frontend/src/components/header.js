import React from "react";
import user from "./pictures/user.png";
import Marquee from "react-fast-marquee";

function Header() {
  /**
   * header component
   */

  return (
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
        <a href="/useredit">
          <img src={user} className="resize-icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
