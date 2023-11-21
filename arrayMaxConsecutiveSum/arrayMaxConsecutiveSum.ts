export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let maxSum = 0;
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    const slicedArray = inputArray.slice(i, i + k);
    const nextSum = slicedArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (maxSum < nextSum) {
      maxSum = nextSum;
    }
  }
  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
