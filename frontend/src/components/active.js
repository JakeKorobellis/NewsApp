import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";

function Active() {
  //Protected Variables
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url9 = process.env.REACT_APP_URL9;
  const url10 = process.env.REACT_APP_URL10;

  const [currentState, setCurrentState] = React.useState("Gainers");
  const [mostActive, setMostActive] = React.useState([]);
  const [lastUpdateActive, setLastUpdateActive] = React.useState("");
  const [gainers, setGainers] = React.useState([]);
  const [losers, setLosers] = React.useState([]);
  const [lastUpdatedMovers, setLastUpdateMovers] = React.useState("");
  const [defaultMover, setDefaultMovers] = React.useState([]);

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

    fetch(url10, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        setDefaultMovers(data.gainers);

        setGainers(data.gainers);
        setLosers(data.losers);
        setLastUpdateMovers(
          `Last Updated: ${convertISOToFormattedDateTime(data.last_updated)}`
        );
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(gainers);

  function renederActive(data) {
    return data.map((curr) => {
      return (
        <div className="data-active-flex">
          <div>${curr.symbol}</div>
          <div>{curr.volume}</div>
        </div>
      );
    });
  }

  function renederMovers(data) {
    return data.map((curr) => {
      return (
        <div className="data-active-flex">
          <div>${curr.symbol}</div>
          <div>{curr.percent_change}%</div>
        </div>
      );
    });
  }

  function changeStateMovers(data, curr) {
    console.log(data);
    setCurrentState(curr);
    setDefaultMovers(data);
  }

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

          {gainers.length > 1 && losers.length > 1 ? (
            <div class="data stream-all">
              <div className="title-all">What's Hot</div>
              <div className="stream-hold-all-3">
                <div className="most-active">
                  <div className="title-hold black-text">
                    Most Active
                    <div className="last-updated">
                      {lastUpdateActive ? lastUpdateActive : ""}
                    </div>
                  </div>
                  <div className="data-hold-active">
                    {mostActive ? renederActive(mostActive) : "Loading..."}
                  </div>
                </div>
                <div className="top-movers">
                  <div className="title-hold black-text">
                    Top Movers: {currentState}
                    <div className="last-updated">
                      {lastUpdatedMovers ? lastUpdatedMovers : ""}
                    </div>
                  </div>
                  <div className="data-hold-active2">
                    {gainers && losers
                      ? renederMovers(defaultMover)
                      : "Loading..."}
                  </div>
                  {gainers && losers ? (
                    <div className="button-render">
                      <button
                        className="button-split"
                        onClick={() => changeStateMovers(gainers, "Gainers")}
                      >
                        Gainers
                      </button>

                      <button
                        className="button-split"
                        onClick={() => changeStateMovers(losers, "Losers")}
                      >
                        Losers
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div class="data stream-all">
              <div className="title-all">What's Hot</div>
              <div className="stream-hold-all-6">
                {" "}
                <div>Market is Closed</div>
                <div>Come back when it is open!</div>{" "}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Active;
