//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let gigasec = Math.pow(10,12);
  let newDate = new Date(date.getTime() + gigasec)
  return newDate;
};

