import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";

function Active() {
  //Protected Variables
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url9 = process.env.REACT_APP_URL9;

  const [currentState, setCurrentState] = React.useState("Stocks");
  const [mostActive, setMostActive] = React.useState([]);
  const [lastUpdateActive, setLastUpdateActive] = React.useState("");

  React.useEffect(() => {
    fetch(url9, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        setMostActive(data.most_actives);
        setLastUpdateActive(
          `Last Updated: ${convertISOToFormattedDateTime(data.last_updated)}`
        );
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(mostActive);

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
            <Side curr={4} />
          </div>
          <div class="data stream-all">
            <div className="title-all">What's Hot</div>
            <div className="stream-hold-all-3">
              <div className="most-active">
                <div className="title-hold">
                  Most Active
                  <div className="last-updated">
                    {lastUpdateActive ? lastUpdateActive : ""}
                  </div>
                </div>
                <div className="data-hold-active"></div>
              </div>
              <div className="top-movers">
                <div className="title-hold">Top Movers: {currentState}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Active;
