export function minesweeper(matrix: boolean[][]): number[][] {
  const matrixNumbers: number[][] = [];
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      let count = 0;
      if (x === 0) {
        matrixNumbers.push([]);
      }
      if (y + 1 < matrix.length) {
        if (matrix[y + 1][x]) {
          count++;
        }
      }
      if (y - 1 >= 0) {
        if (matrix[y - 1][x]) {
          count++;
        }
      }
      if (x + 1 < matrix[0].length) {
        if (matrix[y][x + 1]) {
          count++;
        }
      }
      if (x - 1 >= 0) {
        if (matrix[y][x - 1]) {
          count++;
        }
      }
      if (y + 1 < matrix.length && x + 1 < matrix[0].length) {
        if (matrix[y + 1][x + 1]) {
          count++;
        }
      }
      if (y - 1 >= 0 && x + 1 < matrix[0].length) {
        if (matrix[y - 1][x + 1]) {
          count++;
        }
      }
      if (y + 1 < matrix.length && x - 1 >= 0) {
        if (matrix[y + 1][x - 1]) {
          count++;
        }
      }
      if (y - 1 >= 0 && x - 1 >= 0) {
        if (matrix[y - 1][x - 1]) {
          count++;
        }
      }
      matrixNumbers[y].push(count);
    }
  }
  return matrixNumbers;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
