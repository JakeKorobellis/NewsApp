import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get90Prior from "./dates/get90Prior";
import DataCleanSplit from "./helperfunctions/data-clean-splits";
import user from "./pictures/user.png";
import Header from "./header";

function StockSplits() {
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
    fetch(`${url11}Split${url12}${prior}${url13}${curr}`, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(DataCleanSplit(res.reverse())));

    setReady(true);
  }, []);

  function renderData(data) {
    return data.map((curr) => {
      return (
        <div className="data-hold-div">
          <div className="twentyfive test">${curr.target_symbol}</div>
          <div className="twentyfive">
            {curr.effective_date ? curr.effective_date : "N/A"}
          </div>
          <div className="twentyfive">{curr.old_rate}</div>
          <div className="twentyfive">
            {curr.ca_sub_type === "reverse_split" ? "Reverse Split" : "Split"}
          </div>
          <div className="twentyfive">{curr.new_rate}</div>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side curr={7} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Stock Splits</div>
            <div className="stream-hold-all4">
              {ready && data ? (
                <>
                  <div className="titles-div">
                    <div className="twentyfive3 black-text">Symbol</div>
                    <div className="twentyfive3 black-text">Effective Date</div>
                    <div className="twentyfive3 black-text">Old Rate</div>
                    <div className="twentyfive3 black-text">Merge Action</div>
                    <div className="twentyfive3 black-text">New Rate</div>
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

export default StockSplits;
