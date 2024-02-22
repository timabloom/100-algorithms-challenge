export function largestNumber(n: number): number {
  let numberString = "";
  for (let i = 0; i < n; i++) {
    numberString = numberString.concat("", "9");
  }
  return parseInt(numberString);
}

console.log(largestNumber(2));
