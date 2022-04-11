export const getTodaysDate = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let date = new Date().getDate();
  date = date < 10 ? "0" + date : date;

  return year + "/" + month + "/" + date;
};
