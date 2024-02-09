export function firstDigit(inputString: string): string {
  const digits = inputString.match(/[0-9]/g) as string[];
  return digits[0];
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
