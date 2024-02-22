export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  const digitsString = number.toString();
  if (digitsString.length === width) {
    return digitsString;
  } else if (digitsString.length > width) {
    return digitsString.substring(2);
  } else {
    const loopLength = width - digitsString.length;
    let zeros = "";
    for (let i = 0; i < loopLength; i++) {
      zeros = zeros.concat("", "0");
    }
    return zeros.concat("", digitsString);
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
