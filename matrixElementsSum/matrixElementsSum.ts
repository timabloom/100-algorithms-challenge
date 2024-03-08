export function matrixElementsSum(matrix: any[][]): number {
  const cost: number[] = [];
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
        if (y !== 0) {
          if (matrix[y - 1][x] === 0 && matrix[y][x] !== 0) {
            matrix[y][x] = 0
          } else {
            cost.push(matrix[y][x]);
          }
        } else {
          if (matrix[y][x] !== 0) {
            cost.push(matrix[y][x]);
          }
        }
    }
  }
  return cost.reduce((acc, curr) => acc + curr, 0);
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
