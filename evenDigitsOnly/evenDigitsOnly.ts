export function evenDigitsOnly(n: number): boolean {
  const arrayStringDigits = n.toString().split("");
  return arrayStringDigits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
