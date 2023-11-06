import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get90Prior from "./dates/get90Prior";
import DataCleanMerge from "./helperfunctions/data-clean-mergers";
import user from "./pictures/user.png";
import Header from "./header";

function MandA() {
  const curr = getCurrentYYYYMMDD();
  const prior = get90Prior(curr);
  const url11 = process.env.REACT_APP_URL11;
  const url12 = process.env.REACT_APP_URL12;
  const url13 = process.env.REACT_APP_URL13;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;

  const [data, setData] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    fetch(`${url11}Merger${url12}${prior}${url13}${curr}`, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(DataCleanMerge(res.reverse())));

    setReady(true);
  }, []);

  function renderData(data) {
    return data.map((curr) => {
      return (
        <div className="data-hold-div">
          <div className="twentyfive test">{curr.effective_date}</div>
          <div className="twentyfive">${curr.initiating_symbol}</div>
          <div className="twentyfive">Acquired</div>
          <div className="twentyfive">${curr.target_symbol}</div>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="parent">
          <Header />
          <div className="sidebar">
            <Side curr={6} />
          </div>
          <div className="data stream-all">
            <div className="title-all">Mergers and Acquisitions</div>
            <div className="stream-hold-all4">
              {ready && data ? (
                <>
                  <div className="titles-div">
                    <div className="twentyfive black-text">Date</div>
                    <div className="twentyfive black-text">
                      Initiating Symbol
                    </div>
                    <div className="twentyfive black-text">Merger Action</div>
                    <div className="twentyfive black-text">Target Symbol</div>
                  </div>
                  <div className="stream-hold-all5">
                    <div>{renderData(data)}</div>
                  </div>
                </>
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

export default MandA;
