//Time helper function
function convertToReadableDate(time) {
  const date = new Date(time);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return formattedDate;
}

function convert_data(bars) {
  return bars.map((curr) => ({
    open: curr.o,
    high: curr.h,
    low: curr.l,
    close: curr.c,
    time: Date.parse(curr.t) / 1000,
  }));
}

export default convert_data;
