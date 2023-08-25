import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get90Prior from "./dates/get90Prior";

function Dividen() {
  const curr = getCurrentYYYYMMDD();
  get90Prior(curr);

  console.log(curr, get90Prior(curr));

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
            <div className="fifityvw"> yo</div>
          </div>
          <div class="sidebar">
            <Side curr={5} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Live</div>
            <div className="stream-hold-all">
              Will hold the news via a stream
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Dividen;
