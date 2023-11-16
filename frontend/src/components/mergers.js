import React from "react";
import Side from "./sidebar";
import getCurrentYYYYMMDD from "./dates/getCurrentYYYYMMDD";
import get90Prior from "./dates/get90Prior";
import DataCleanMerge from "./helperfunctions/data-clean-mergers";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./helperfunctions/spnningIcon";

function MandA() {
  /**
   * Mergers and aquistions
   */

  const navigate = useNavigate();

  const curr = getCurrentYYYYMMDD(); // Get current date
  const prior = get90Prior(curr); // Get past 90 days

  // Protected variables
  const url11 = process.env.REACT_APP_URL11;
  const url12 = process.env.REACT_APP_URL12;
  const url13 = process.env.REACT_APP_URL13;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;

  // Data holder
  const [data, setData] = React.useState([]);
  const [ready, setReady] = React.useState(false);

  // User auth
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    /**
     * Need to add user auth
     */

    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 403) {
          navigate("/login");
        } else {
          setUserData(data);
        }
      })
      .then(
        fetch(`${url11}Merger${url12}${prior}${url13}${curr}`, {
          headers: {
            "APCA-API-KEY-ID": key,
            "APCA-API-SECRET-KEY": secret,
          },
        })
          .then((res) => res.json())
          .then((res) => setData(DataCleanMerge(res.reverse())))
          .then(setReady(true))
      );
  }, []);

  function renderData(data) {
    /**
     * Dynamic render of data
     */
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

  // Render
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
              {ready ? (
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
                  <LoadingIcon />
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
