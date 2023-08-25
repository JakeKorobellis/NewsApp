import React from "react";
function Side(curr) {
  const get_current = React.useState(curr);
  let current = get_current[0].curr;

  return (
    <div className="sidebar-format">
      <span>
        <a
          href="/content"
          className={current == 1 ? "current-side" : "notcurrent-side"}
        >
          Live News
        </a>
      </span>
      <span>
        <a
          href="/content/split"
          className={current == 2 ? "current-side" : "notcurrent-side"}
        >
          Split News
        </a>
      </span>

      <span>
        <a
          href="/content/search"
          className={current == 3 ? "current-side" : "notcurrent-side"}
        >
          Asset Search
        </a>
      </span>
      <span>
        <a
          href="/content/active"
          className={current == 4 ? "current-side" : "notcurrent-side"}
        >
          Active Stocks
        </a>
      </span>
      <span>
        <a
          href="/content/dividen"
          className={current == 5 ? "current-side" : "notcurrent-side"}
        >
          Dividen Payout
        </a>
      </span>
      <span>
        <a
          href="/content/MandA"
          className={current == 6 ? "current-side" : "notcurrent-side"}
        >
          Stock Mergers
        </a>
      </span>
      <span>
        <a
          href="/content/StockSplits"
          className={current == 7 ? "current-side" : "notcurrent-side"}
        >
          Stock Splits
        </a>
      </span>
    </div>
  );
}

export default Side;
