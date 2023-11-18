import React from "react";
import user from "./pictures/user.png";
import Marquee from "react-fast-marquee";

function Header() {
  /**
   * header component
   */

  const [data, setData] = React.useState(null);
  const [crypto, setCrypto] = React.useState(null);
  //

  const url1 = process.env.REACT_APP_KEY_0;
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url2 = process.env.REACT_APP_KEY_2;
  const symbols1 = process.env.REACT_APP_KEY_3;
  const symbols2 = process.env.REACT_APP_KEY_4;

  React.useEffect(() => {
    //Type is False, stock
    fetch(url1 + symbols1, {
      headers: {
        "APCA-API-KEY-ID": key,
        "APCA-API-SECRET-KEY": secret,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .then(
        fetch(url2 + symbols2, {
          headers: {
            "APCA-API-KEY-ID": key,
            "APCA-API-SECRET-KEY": secret,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setCrypto(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
      );
  }, []);

  console.log(crypto);

  const renderStocks = () => {
    return (
      <div className="display-flex-">
        <div className="rotate-title-dece font-marquee">
          $SPY: {data.SPY.dailyBar.c}
        </div>
        <div className="rotate-title-dece font-marquee">
          $QQQ: {data.QQQ.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $BTC: {crypto.orderbooks["BTC/USD"].a[0].p}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $ETH: {crypto.orderbooks["ETH/USD"].a[0].p}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $DOGE: {crypto.orderbooks["DOGE/USD"].a[0].p}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $XLF: {data.XLF.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $VNQ: {data.VNQ.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $EEM: {data.EEM.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $ELV: {data.ELV.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $ELY: {data.ELY.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $XLU: {data.XLU.dailyBar.c}{" "}
        </div>
        <div className="rotate-title-dece font-marquee">
          $BOTZ: {data.BOTZ.dailyBar.c}{" "}
        </div>
      </div>
    );
  };
  console.log(data);

  return (
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
      <div>
        <Marquee
          style={{
            width: "60vw",
            height: "10vh",
          }}
          gradient={false}
          speed={20}
        >
          <div className="rotate-title font-marquee">In the market:</div>
          {crypto != null ? renderStocks() : "Loading"}
        </Marquee>
      </div>
      <div className="fifityvw2">
        {" "}
        <a href="/useredit">
          <img src={user} className="resize-icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
