export function digitDegree(n: number): number {
  const stringDigits = n.toString().split("");
  let digits = stringDigits.map((string) => parseInt(string));
  let count = 0
  while (digits.length > 1) {
      const sum = digits
        .reduce((acc, curr) => acc + curr, 0)
        .toString()
        .split("");
      digits = sum.map((string) => parseInt(string));
      count++
  }
  return count
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));
