function convertISOToFormattedDateTime(isoTimestamp) {
  /**
   * Date conversion ISO
   */
  const date = new Date(isoTimestamp);
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

export default convertISOToFormattedDateTime;
