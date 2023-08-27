import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";
import user from "./pictures/user.png";

function ConetentHome() {
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url = process.env.REACT_APP_URL14;
  const [prev, setPrev] = React.useState([]);

  React.useEffect(() => {
    fetch(url, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // Process the response data here
        setPrev(response.news);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  //Reusable FI
  function reuse(news) {
    return news.map((curr) => {
      return (
        <div className="hold-crypto-news">
          <div className="fifty-five">{curr.headline}</div>
          <div className="hold-right">
            <div className="">{curr.source}</div>
            <div className="">
              <a href={curr.url} target="_blank">
                View
              </a>
            </div>
            <div className="small-text-date">
              {convertISOToFormattedDateTime(curr.updated_at)}
            </div>
          </div>
        </div>
      );
    });
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
            <div className="fifityvw2">
              {" "}
              <a href="/content/split">
                <img src={user} className="resize-icon" />
              </a>
            </div>
          </div>
          <div class="sidebar">
            <Side curr={1} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Live News</div>
            <div className="stream-hold-all9">
              {prev ? reuse(prev) : "loading"}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ConetentHome;
