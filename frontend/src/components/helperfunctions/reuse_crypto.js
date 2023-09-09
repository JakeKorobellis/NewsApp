import fav from "./favs";
import convertTimestampToDate from "../time_convert";

//Reusable crypto render
export default function reuse_crpyto(news) {
  return news.map((curr) => {
    return (
      <div className="hold-crypto-news">
        <div className="fifty-five">{curr.title}</div>
        <div className="hold-right">
          <div className="">{curr.source}</div>
          <div className="">
            <a href={curr.link} target="_blank">
              View
            </a>
          </div>
          <div className="small-text-date">
            {convertTimestampToDate(curr.feedDate)}
          </div>
          <div>
            <button
              className="faviortie-btn"
              onClick={() =>
                fav(
                  curr.title,
                  curr.source,
                  curr.link,
                  convertTimestampToDate(curr.feedDate)
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  });
}
