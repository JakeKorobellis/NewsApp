import React from "react";
import Side from "./sidebar";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "./datasearch";
import convertISOToFormattedDateTime from "./time_convert-2";

function Search() {
  //Protected Variables
  const url1 = process.env.REACT_APP_URL1;
  const url2 = process.env.REACT_APP_URL2;
  const url3 = process.env.REACT_APP_URL3;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;

  const [current, setCurrent] = React.useState([]);
  const [placeholder1, setPlaceholder] = React.useState(
    "SPDR S&P 500 ETF Trust"
  );

  React.useEffect(() => {
    fetch(url3, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        setCurrent(data.news);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  const items = data;
  const handleOnSelect = (item) => {
    fetch(url1 + item.id + url2, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        setCurrent(data.news);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    setPlaceholder(item.name);

    console.log(item);
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{
            display: "block",
            textAlign: "left",
            padding: "none",
            fontSize: ".75vw",
          }}
        >
          {item.name}
        </span>
        <span
          style={{
            display: "block",
            textAlign: "left",
            padding: "none",
            fontSize: ".75vw",
          }}
        >
          {item.id}
        </span>
      </>
    );
  };

  function formatData(news) {
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
            <div className="fifityvw"> yo</div>
          </div>
          <div class="sidebar">
            <Side curr={3} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Search by Name</div>
            <div
              style={{
                width: "30vw",
              }}
            >
              <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                formatResult={formatResult}
                placeholder={placeholder1}
              />
            </div>
            <div className="stream-hold-all-2">
              <div className="news-search">
                {current ? formatData(current) : "Loading"}
              </div>
              <div className="chart-search"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Search;
