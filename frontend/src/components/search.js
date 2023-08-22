import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Side from "./sidebar";

function Search() {
  const stock_route = process.env.REACT_APP_STOCK;
  const crypto_route = process.env.REACT_APP_CRYPTO;

  const [stocks, setStock] = React.useState([]);
  const [crypto, setCrypto] = React.useState([]);

  React.useEffect(() => {
    fetch(stock_route)
      .then((res) => res.json())
      .then((res) => setStock(res));

    fetch(crypto_route)
      .then((res) => res.json())
      .then((res) => setCrypto(res));
  }, []);

  const all = [...stocks, ...crypto.data];

  console.log(all);

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
            <Side curr={3} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Search by Name</div>
            <div className="stream-hold-all-2">ready</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Search;
