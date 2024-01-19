export function crossingSum(matrix: number[][], a: number, b: number): number {
  const row = matrix[a];
  const rowSkip = matrix[a][b];
  let column: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][b]);
  }
  const allCells = row.concat(column);
  return allCells.reduce((acc, curr) => acc + curr, 0) - rowSkip;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
