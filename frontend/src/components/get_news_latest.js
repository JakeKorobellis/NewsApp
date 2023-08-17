function News() {
  const key = process.env.REACT_APP_KEY;
  const secret = process.env.REACT_APP_SECRET;
  const url = process.env.REACT_APP_URL20;

  fetch(url, {
    headers: {
      "APCA-API-KEY-ID": key,
      "APCA-API-SECRET-KEY": secret,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}

export default News;
