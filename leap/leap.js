export const isLeap = (year) => {
  const numOfDays = new Date(year, 2, 0).getDate();
  return numOfDays === 29 ? true : false;
};
