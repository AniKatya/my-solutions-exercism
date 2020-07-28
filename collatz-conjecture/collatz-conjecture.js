export const steps = (number, stepsNum = 0) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  if (number === 1) {
    return stepsNum;
  }
  return steps(number % 2 === 0 ? number / 2 : number * 3 + 1, stepsNum + 1);
};
