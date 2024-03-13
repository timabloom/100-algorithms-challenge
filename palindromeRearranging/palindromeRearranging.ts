export function palindromeRearranging(inputString: string): boolean {
  const inputArray = inputString.split("");
  const sortedInput = {};
  for (let i = 0; i < inputArray.length; i++) {
    if (sortedInput.hasOwnProperty(inputArray[i])) {
      sortedInput[inputArray[i]] = sortedInput[inputArray[i]] + 1;
    } else {
      sortedInput[inputArray[i]] = 1;
    }
  }
  let oddNumbered = 0;
  for (let letter in sortedInput) {
    console.log(letter);
    if (sortedInput[letter] % 2 !== 0) {
      oddNumbered++;
    }
  }
  if (
    (inputArray.length % 2 === 0 && oddNumbered === 0) ||
    (inputArray.length % 2 !== 0 && oddNumbered === 1)
  ) {
    return true;
  }
  return false;
}

console.log(palindromeRearranging("aabb"));
