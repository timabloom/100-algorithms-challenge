export function mostFrequentDigitSum(n: number): number {
  const sequence = {};
  let digits = n.toString().split("");
  let x = n;
  while (x > 0) {
    const sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);
    x = x - sum;
    digits = x.toString().split("");
    if (sequence.hasOwnProperty(sum)) {
      sequence[sum] = sequence[sum] + 1;
    } else {
      sequence[sum] = 1;
    }
  }

  let max = 0;
  let maxValues: number[] = [];

  for (let value in sequence) {
    if (sequence[value] > max) {
      max = sequence[value];
      maxValues = [];
      maxValues.push(parseInt(value));
    } else if (sequence[value] === max) {
      maxValues.push(parseInt(value));
    }
  }

  maxValues.sort((a, b) => b - a);
  return maxValues[0];
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
