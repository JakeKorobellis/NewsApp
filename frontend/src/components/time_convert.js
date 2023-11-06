function convertTimestampToDate(timestamp_ms) {
  /**
   * Date conversion Time Stamp
   */
  const date = new Date(timestamp_ms);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/New_York",
  };
  const formatted_date = date.toLocaleDateString("en-US", options);
  return formatted_date + " EST";
}

export default convertTimestampToDate;
