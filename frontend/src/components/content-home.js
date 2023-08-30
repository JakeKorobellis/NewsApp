import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";
import user from "./pictures/user.png";
import useWebSocket from "react-use-websocket";

function ConetentHome() {
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url = process.env.REACT_APP_URL14;
  const [prev, setPrev] = React.useState([]);
  const [ready, setReady] = React.useState(false);

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

    const urlo = "wss://stream.data.alpaca.markets/v1beta1/news";
    const socket = new WebSocket(urlo);
    const authDetails = {
      action: "auth",
      key: key,
      secret: secret,
    };

    const subData = { action: "subscribe", news: ["*"] };

    socket.onmessage = (event) => {
      const checkConnection = JSON.parse(event.data);
      console.log(checkConnection);
      const dataMsg = checkConnection[0]["msg"];
      console.log(checkConnection[0]);
      //Attempt connection
      if (dataMsg == "connected") {
        console.log("Authenticating...");
        socket.send(JSON.stringify(authDetails));
      }
      //Check connection && Subscribe to Data
      if (dataMsg == "authenticated") {
        console.log("Authenticated!, getting data.");
        socket.send(JSON.stringify(subData));
      }
    };

    setReady(true);
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
              <a href="/useredit">
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
              {prev && ready ? (
                reuse(prev)
              ) : (
                <div className="holder-loader">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ConetentHome;
