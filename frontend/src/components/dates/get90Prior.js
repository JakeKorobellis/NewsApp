function getDateBefore(inputDate) {
  const input = new Date(inputDate);
  input.setDate(input.getDate() - 90);

  const year = input.getFullYear();
  const month = String(input.getMonth() + 1).padStart(2, "0");
  const day = String(input.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export default getDateBefore;
