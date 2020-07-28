//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const complement = {
    G:"C",
    C:"G",
    T:"A",
    A:"U",
  }


export const toRna = (nucleotide) => {
  let result = "";
  [...nucleotide].map((el) => {
    result += complement[el];
  });
  return result;
};
