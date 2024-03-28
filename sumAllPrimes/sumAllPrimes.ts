export function sumAllPrimes(num: number): number {
  let sumAllNumbers = 0;
  for (let i = 2; i <= num; i++) {
    sumAllNumbers += i;
  }
  let sumNotPrime = 0;
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        sumNotPrime += i;
        break;
      }
    }
  }
  return sumAllNumbers - sumNotPrime;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
