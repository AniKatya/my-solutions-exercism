//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = true;
  const checkLetter =(letter)=>{
    sentence.indexOf(letter)>=0? null: result = false;
  }
  alphabet.split('').forEach(letter=>checkLetter(letter))
  
  return result;
};
