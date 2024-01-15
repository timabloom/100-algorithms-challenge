export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const cell1Sum = cell1.toLowerCase().charCodeAt(0) + parseInt(cell1[1]);
  const cell2Sum = cell2.toLowerCase().charCodeAt(0) + parseInt(cell2[1]);
  return cell1Sum % 2 === cell2Sum % 2;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
