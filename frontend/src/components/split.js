import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Side from "./sidebar";

function Split() {
  //Protected Variables
  const api_route = process.env.REACT_APP_API_ROUTE;
  const crypto_first = process.env.REACT_APP_CRYPTO_FIRST;
  const crypto_second = process.env.REACT_APP_CRYPTO_SECOND;

  //States
  const [news, setNews] = React.useState([]); //Crypto news State
  const [fi, setFi] = React.useState([]);
  const [curr_crypto, set_curr_crpyto] = React.useState("Latest");

  //Intital Render
  React.useEffect(() => {
    fetch(api_route) //Crypto News Route
      .then((res) => res.json())
      .then((res) => setNews(res.news));

    const key = process.env.REACT_APP_KEY;
    const secret = process.env.REACT_APP_SECRET;
    const url = process.env.REACT_APP_URL20;

    fetch(url, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        setFi(data.news);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  //Reusable crypto render
  function reuse_crpyto(news) {
    return news.map((curr) => {
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
  }

  //Reusable FI
  function reuse_fi(news) {
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
            <div className="">{curr.updated_at}</div>
          </div>
        </div>
      );
    });
  }

  //Reusable selection - crypto
  function crypto_selection(choice) {
    fetch(crypto_first + choice + crypto_second)
      .then((res) => res.json())
      .then((res) => setNews(res.news));
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
            <Side curr={2} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Split</div>
            <div className="selection-split-hold">
              <div className="fifty-selection">{curr_crypto}</div>

              <div className="fifty-selection">Stocks</div>
            </div>
            <div className="stream-hold-all wider-hold-all">
              <div className="crypto-hold">
                {news !== [] ? reuse_crpyto(news) : "Loading"}
              </div>
              <div className="stocks-hold">
                {fi !== [] ? reuse_fi(fi) : "Loading"}
              </div>
            </div>
            <div className="split-button-hold">
              <div className="splity-fifty">
                <button
                  onClick={() => {
                    crypto_selection("latest");
                    set_curr_crpyto("Latest");
                  }}
                  className="button-split"
                >
                  Latest
                </button>
                <button
                  onClick={() => {
                    crypto_selection("trending");
                    set_curr_crpyto("Trending");
                  }}
                  className="button-split"
                >
                  Trending
                </button>
                <button
                  onClick={() => {
                    crypto_selection("handpicked");
                    set_curr_crpyto("Hand Picked");
                  }}
                  className="button-split"
                >
                  Hand Picked
                </button>

                <button
                  onClick={() => {
                    crypto_selection("bullish");
                    set_curr_crpyto("Bullish");
                  }}
                  className="button-split"
                >
                  Bullish
                </button>
                <button
                  onClick={() => {
                    crypto_selection("bearish");
                    set_curr_crpyto("Bearish");
                  }}
                  className="button-split"
                >
                  Bearish
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Split;
