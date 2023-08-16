import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Side from "./sidebar";

function Split() {
  const api_route = process.env.REACT_APP_API_ROUTE;
  const api_fi = process.env.REACT_APP_API_FI;
  const [news, setNews] = React.useState([]); //Crypto news State
  const [fi, setFi] = React.useState([]);

  console.log(fi);

  React.useEffect(() => {
    fetch(api_route) //Crypto News Route
      .then((res) => res.json())
      .then((res) => setNews(res.news));

    fetch(api_fi)
      .then((res) => res.json())
      .then((res) => setFi(res.feed));
  }, []);

  const renderNews = news.map((curr) => {
    return (
      <div className="hold-crypto-news">
        <div className="fifty-five">{curr.title}</div>
        <div className="hold-right">
          <div className="">{curr.source}</div>
          <div className="">
            <a href={curr.link} target="_blank">
              View
            </a>
          </div>
          <div className="">{curr.feedDate}</div>
        </div>
      </div>
    );
  });

  const renderFi = fi.map((curr) => {
    return (
      <div className="hold-crypto-news">
        <div className="fifty-five">{curr.title}</div>
        <div className="hold-right">
          <div className="">{curr.source}</div>
          <div className="">
            <a href={curr.url} target="_blank">
              View
            </a>
          </div>
          <div className="">{curr.time_published}</div>
        </div>
      </div>
    );
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
            <div className="fifityvw"> yo</div>
          </div>
          <div class="sidebar">
            <Side curr={2} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Split</div>
            <div className="stream-hold-all wider-hold-all">
              <div className="crypto-hold">
                {news !== [] ? renderNews : "Loading"}
              </div>
              <div className="stocks-hold">
                {fi !== [] ? renderFi : "Loading"}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Split;
