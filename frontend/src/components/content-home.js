import React from "react";
import Side from "./sidebar";
import convertISOToFormattedDateTime from "./time_convert-2";
import user from "./pictures/user.png";
import reuse from "./helperfunctions/liveNews";
import { useNavigate } from "react-router-dom";

function ConetentHome() {
  const navigate = useNavigate();

  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url = process.env.REACT_APP_URL14;
  const stream = process.env.REACT_APP_STREAM;
  const [prev, setPrev] = React.useState([]);
  const [ready, setReady] = React.useState(false);
  const [pop_up, setPop_Up] = React.useState(false);
  const [response_add, setResponseAdd] = React.useState("");
  const [userData, setUserData] = React.useState([]);
  const token = localStorage.getItem("token");

  function handleFavAction(action) {
    setResponseAdd(action);
    setPop_Up(true);
  }

  React.useEffect(() => {
    fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));

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

    const urlo = stream;
    const socket = new WebSocket(urlo);
    const authDetails = {
      action: "auth",
      key: key,
      secret: secret,
    };

    const subData = { action: "subscribe", news: ["*"] };

    socket.onmessage = (event) => {
      const checkConnection = JSON.parse(event.data);
      const dataMsg = checkConnection[0]["msg"];
      if (checkConnection[0].T === "n") {
        setPrev((prev) => [checkConnection[0], ...prev]);
      }

      //Attempt connection
      if (dataMsg === "connected") {
        socket.send(JSON.stringify(authDetails));
      }
      //Check connection && Subscribe to Data
      if (dataMsg === "authenticated") {
        socket.send(JSON.stringify(subData));
      }
    };

    setReady(true);
  }, []);

  console.log(userData);

  function popup(data) {
    console.log(data, 1111);
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
      {userData.account ? (
        <header className="App-header">
          <div class="parent">
            <div class="header">
              <div className="fifityvw ">
                <div className="header-title-format">
                  <a href="/" className="default-title">
                    <div className="title-font-large">
                      <span className="neon-blue">N</span>ews
                      <span className="neon-blue">R</span>oom
                      <span className="smaller-title">.com</span>
                    </div>
                  </a>
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
                  reuse(prev, handleFavAction)
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
                {pop_up ? (
                  <div className="confrimation2">{popup(response_add)}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className="holder-auth">
          <div className="large-auth">Hold on!</div>
          <div className="short-auth">Do you have an account?</div>
          <div className="auth-link-hold">
            <a href="/login" className="auth-link">
              Login
            </a>
            <a href="/signup" className="auth-link">
              Signup
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConetentHome;
