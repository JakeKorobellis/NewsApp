import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get90Prior from "./dates/get90Prior";
import DataCleanMerge from "./helperfunctions/data-clean-mergers";

function MandA() {
  const curr = getCurrentYYYYMMDD();
  const prior = get90Prior(curr);
  const url11 = process.env.REACT_APP_URL11;
  const url12 = process.env.REACT_APP_URL12;
  const url13 = process.env.REACT_APP_URL13;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${url11}Merger${url12}${prior}${url13}${curr}`, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(DataCleanMerge(res.reverse())));
  }, []);

  console.log(data);

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
            <Side curr={6} />
          </div>
          <div class="data stream-all">
            <div className="title-all">Mergers and Acquisitions</div>
            <div className="stream-hold-all">
              Will hold the news via a stream
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MandA;
