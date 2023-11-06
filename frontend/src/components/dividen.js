import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get30Prior from "./dates/get30Prior";
import Header from "./header";

function Dividen() {
  /**
   * Get current date
   */

  const curr = getCurrentYYYYMMDD(); // Current date
  const prior = get30Prior(curr); // Previous 30 days

  // Protected Variables
  const url11 = process.env.REACT_APP_URL11;
  const url12 = process.env.REACT_APP_URL12;
  const url13 = process.env.REACT_APP_URL13;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;

  // Data and readiness
  const [ready, setReady] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    /**
     * Inital fetch of data
     * Need to add user auth
     */
    fetch(`${url11}Dividend${url12}${prior}${url13}${curr}`, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.reverse()));

    setReady(true);
  }, []);

  function renderData(data) {
    /**
     * Dynamic render of data
     */
    return data.map((curr) => {
      return (
        <div className="data-hold-div">
          <div className="twentyfive test">{curr.target_symbol}</div>
          <div className="twentyfive">${curr.cash}</div>
          <div className="twentyfive">{curr.declaration_date}</div>
          <div className="twentyfive">{curr.record_date}</div>
          <div className="twentyfive">{curr.payable_date}</div>
        </div>
      );
    });
  }

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <div class="parent">
          <Header />
          <div class="sidebar">
            <Side curr={5} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Dividen Payouts</div>
            <div className="stream-hold-all4">
              {ready && data ? (
                <>
                  <div className="titles-div">
                    <div className="twentyfive2 black-text">Symbol</div>
                    <div className="twentyfive2 black-text">Amount</div>
                    <div className="twentyfive2 black-text">
                      Declaration Date
                    </div>
                    <div className="twentyfive2 black-text">Record Date</div>
                    <div className="twentyfive2 black-text">Payable Date</div>
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

export default Dividen;
