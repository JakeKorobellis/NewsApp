const url = process.env.REACT_APP_USER_FAV;

export default function fav(h, s, u, t) {
  const data = {
    headline: h,
    source: s,
    url: u,
    time: t,
  };
  console.log(data);

  //handle by sending to the backend
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.action);
    });
}
