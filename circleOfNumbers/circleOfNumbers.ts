export function circleOfNumbers(n: number, firstNumber: number): number {
  let circleOfNumbers: number[] = [];
  for (let i = 0; i < n; ++i) {
    circleOfNumbers.push(i);
  }

  if (n / 2 > firstNumber) {
    return circleOfNumbers[firstNumber + n / 2]
  } else {
    return circleOfNumbers[firstNumber - n / 2]
  }
}

console.log(circleOfNumbers(10, 9));
