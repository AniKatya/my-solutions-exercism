//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as
// a convenience to get you started writing code faster.
//

const { threadId } = require("worker_threads");

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rowsArray = matrix.split("\n").map((arr) => arr.split(" ").map((el) => parseInt(el)));
  }

  transpose(){
    let columnArray = [];
    for (let i = 0; i < this.rowsArray[0].length; i++) {
      let tempRow = [];
      this.rowsArray.forEach((row) => {
        tempRow.push(row[i]);
      });
      columnArray.push(tempRow);
    }
    return columnArray;
  }

  get rows() {
    return this.rowsArray;
  }

  get columns() {
    let columnArray = this.transpose();
    return columnArray;
  }
}

