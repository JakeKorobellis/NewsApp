import React from "react";
function Fav() {
  return (
    <div className="home">
      <span className="small-sub-head black">NewsRoom</span>
      <span className="header-font-small large-sub-head black">
        The latest in <span className="white large-sub-head">Equities</span> &{" "}
        <span className="white large-sub-head">Crypto</span>{" "}
      </span>

      <div className="has-account">
        <div className="black">Do you have an account?</div>
        <div className="buttons-home">
          <a href="/login" className="home-button-link-yes">
            Yes
          </a>
          <a href="/signup" className="home-button-link-no">
            No
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fav;
