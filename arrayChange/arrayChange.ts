export function arrayChange(inputArray: number[]): number {
  let count = 0;
  let previousNumber = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= previousNumber) {
      count += previousNumber - inputArray[i] + 1;
      previousNumber = previousNumber + 1;
    } else {
      previousNumber = inputArray[i];
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
