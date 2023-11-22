export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const bishopArray = [bishop.charCodeAt(0), parseInt(bishop[1])];
  const pawnArray = [pawn.charCodeAt(0), parseInt(pawn[1])];

  for (let i = 1; i < 7; i++) {
    const placement1 = [bishopArray[0] + i, bishopArray[1] + i];
    const placement2 = [bishopArray[0] + i, bishopArray[1] - i];
    const placement3 = [bishopArray[0] - i, bishopArray[1] + i];
    const placement4 = [bishopArray[0] - i, bishopArray[1] - i];
    if (
      (pawnArray[0] === placement1[0] && pawnArray[1] === placement1[1]) ||
      (pawnArray[0] === placement2[0] && pawnArray[1] === placement2[1]) ||
      (pawnArray[0] === placement3[0] && pawnArray[1] === placement3[1]) ||
      (pawnArray[0] === placement4[0] && pawnArray[1] === placement4[1])
    ) {
      return true;
    }
  }
  return false;
}

console.log(bishopAndPawn("a1", "c3"));
