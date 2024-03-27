export function squareDigitsSequence(a0: number): number {
  const sums: number[] = [];
  let sum = a0;
  let iterations = 1;
  while (!sums.includes(sum)) {
    sums.push(sum);
    const digits: string[] = sum.toString().split("");
    sum = digits.reduce(
      (acc, digit) => acc + parseInt(digit) * parseInt(digit),
      0
    );
    iterations++;
  }
  return iterations;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
