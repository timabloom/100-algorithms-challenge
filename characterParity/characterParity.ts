export function characterParity(symbol: string): string {
  const digit = parseInt(symbol);
  const digitNaN = isNaN(digit);
  if (digitNaN) {
    return "not a digit";
  } else if (Number.isInteger(digit / 2)) {
    return "even";
  } else return "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
