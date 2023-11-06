import React from "react";
import Side from "./sidebar";
import Header from "./header";

function Success() {
  /**
   * Success page once user makes edits to profile
   */
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
