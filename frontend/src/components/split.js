import React from "react";
import Side from "./sidebar";
import reuse_crpyto from "./helperfunctions/reuse_crypto";
import reuse_fi from "./helperfunctions/reuse_fi";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./helperfunctions/spnningIcon";

function Split() {
  const navigate = useNavigate();

  //Protected Variables
  const api_route = process.env.REACT_APP_API_ROUTE;
  const crypto_first = process.env.REACT_APP_CRYPTO_FIRST;
  const crypto_second = process.env.REACT_APP_CRYPTO_SECOND;
  const url1 = process.env.REACT_APP_URL1;
  const url2 = process.env.REACT_APP_URL2;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url = process.env.REACT_APP_URL20;
  const new_key = process.env.REACT_APP_NEW_KEY;

  //States
  const [news, setNews] = React.useState([]); //Crypto news State
  const [fi, setFi] = React.useState([]);
  const [curr_crypto, set_curr_crpyto] = React.useState("Latest");
  const [curr_fi, set_curr_fi] = React.useState("Latest");
  const [pop_up, setPop_Up] = React.useState(false);
  const [response_add, setResponseAdd] = React.useState("");
  const [ready, setReady] = React.useState(false);
  const [userData, setUserData] = React.useState("");
  const token = localStorage.getItem("token"); // Need to check if authorized

  function handleFavAction(action) {
    setResponseAdd(action);
    setPop_Up(true);
  }

  //Intital Render
  React.useEffect(() => {
    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 403) {
          navigate("/login");
        } else {
          setUserData(data);

          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": new_key,
            },
          };

          fetch(api_route, options) //Crypto News Route
            .then((res) => res.json())
            .then((res) => setNews(res.result));

          fetch(url, {
            //stock news
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
            .then(setReady(true))
            .catch((error) => {
              // Handle errors here
              console.error("Error:", error);
            });
        }
      });
  }, []);

  //Crypto category selection
  function crypto_selection(choice) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": new_key,
      },
    };

    fetch(crypto_first + choice, options)
      .then((res) => res.json())
      .then((res) => setNews(res));
  }

  //Finance category selection
  function fi_selection(choice) {
    if (choice == "latest") {
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
    } else {
      fetch(url1 + choice + url2, {
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
    }
  }

  function popup(data) {
    return (
      <div className="confrimation">
        <div className="test1">
          <button className="button-hold-conf" onClick={handleConfirmation}>
            X
          </button>
        </div>
        <div className="test2">
          <div>{data.action}</div>
        </div>
      </div>
    );
  }

  function handleConfirmation() {
    setPop_Up(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side curr={2} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Split News</div>
            <div className="selection-split-hold">
              <div className="fifty-selection black-text">{curr_crypto}</div>

              <div className="fifty-selection black-text">{curr_fi}</div>
            </div>
            <div className="stream-hold-all wider-hold-all">
              <div className="crypto-hold">
                {ready ? (
                  reuse_crpyto(
                    news,
                    handleFavAction,
                    userData.authData.user._id
                  )
                ) : (
                  <div className="holder-loader">
                    <LoadingIcon />
                  </div>
                )}
              </div>
              {pop_up ? (
                <div className="confrimation">{popup(response_add)}</div>
              ) : (
                ""
              )}
              <div className="stocks-hold">
                {ready ? (
                  reuse_fi(fi, handleFavAction, userData.authData.user._id)
                ) : (
                  <div className="holder-loader">
                    <LoadingIcon />
                  </div>
                )}
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
              <div className="splity-fifty">
                <button
                  onClick={() => {
                    fi_selection("latest");
                    set_curr_fi("Latest");
                  }}
                  className="button-split"
                >
                  Latest
                </button>
                <button
                  onClick={() => {
                    fi_selection("META,AAPL,AMZN,NFLX,GOOGL");
                    set_curr_fi("MAANG");
                  }}
                  className="button-split"
                >
                  MAANG
                </button>
                <button
                  onClick={() => {
                    fi_selection(
                      "MSFT,GOOGL,NVDA,AMD,AAPL,AMZN,META,CSCO,NFLX,IBM,TTD,ON,TSM,ORCL,ASML,RBLX"
                    );
                    set_curr_fi("Tech");
                  }}
                  className="button-split"
                >
                  Tech
                </button>
                <button
                  onClick={() => {
                    fi_selection("JPM,BAC,WFC,MS,RY,GS,SCHW,C,USB,PNC,IBKR");
                    set_curr_fi("Banks");
                  }}
                  className="button-split"
                >
                  Banks
                </button>
                <button
                  onClick={() => {
                    fi_selection("PLD,AMT,EQIX,PSA,O,WELL,VICI,PSA,EQIX,CSGP");
                    set_curr_fi("Real Estate");
                  }}
                  className="button-split"
                >
                  Real Estate
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
