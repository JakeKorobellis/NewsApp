//Time helper function
function convertToReadableDate(time) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const readableDate = new Date(time).toLocaleString("en-US", options);
  return readableDate;
}

function convert_data(bars) {
  return bars.map((curr) => ({
    open: curr.o,
    high: curr.h,
    low: curr.l,
    close: curr.c,
    time: convertToReadableDate(curr.t),
  }));
}

export default convert_data;
