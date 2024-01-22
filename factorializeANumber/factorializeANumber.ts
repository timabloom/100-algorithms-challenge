export function factorializeANumber(num: number): number {
  let sum = 1;
  if (num === 0) return 0;
  for (let i = 1; i < num + 1; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
