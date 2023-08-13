import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="larger-font-body">NewsRoom</div>
      <span className="header-font-small large-sub-head black">
        The latest in <span className="white large-sub-head">Equities</span> &{" "}
        <span className="white large-sub-head">Crypto</span>{" "}
      </span>

      <div className="has-account">
        <div>Do you have an account?</div>
        <div className="buttons-home">
          <a href="/has-account/true" className="home-button-link-yes">
            Yes
          </a>
          <a href="/has-account/true" className="home-button-link-no">
            No
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
