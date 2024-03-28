export function sumOddFibonacciNums(num: number): number {
  const fibonachiSequence: number[] = [];
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      fibonachiSequence.push(1);
      sum += 1;
    } else {
      const currentNumber = fibonachiSequence[i - 1] + fibonachiSequence[i - 2];
      fibonachiSequence.push(currentNumber);
      if (currentNumber % 2 !== 0 && currentNumber <= num) {
        sum += currentNumber;
      }
    }
  }
  return sum;
}

console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
