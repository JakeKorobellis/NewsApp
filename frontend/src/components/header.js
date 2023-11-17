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
      <div>
        <Marquee
          style={{
            width: "60vw",
            height: "10vh",
          }}
          gradient={false}
          speed={20}
        >
          <div className="rotate-title font-marquee">In the market:</div>
          <div className="rotate-title-dece font-marquee">News1 </div>
          <div className="rotate-title-dece font-marquee">News2 </div>
          <div className="rotate-title-dece font-marquee">news3: </div>
          <div className="rotate-title-dece font-marquee">news4: </div>
        </Marquee>
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
