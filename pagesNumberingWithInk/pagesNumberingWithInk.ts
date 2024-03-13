export function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  const startingAmount = current - 1;
  let maxDigits = "";
  const printedPages: number[] = [];
  for (let i = 0; i < numberOfDigits; i++) {
    maxDigits = maxDigits + current;
    if (maxDigits.length > numberOfDigits) break;
    printedPages.push(current);
    current++;
  }
  return printedPages.length + startingAmount;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
