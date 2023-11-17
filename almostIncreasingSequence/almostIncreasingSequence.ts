export function almostIncreasingSequence(sequence: number[]): boolean {
  let removalCount = 0;

  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      removalCount++;
      if (removalCount > 1) {
        return false;
      }
      if (
        sequence[i + 1] === sequence[i - 1] &&
        sequence[i] >= sequence[i + 2]
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 1, 4]));
console.log(almostIncreasingSequence([1, 3, 1, 2]));

console.log(almostIncreasingSequence([1, 1, 2, 3])); // Should return true
console.log(almostIncreasingSequence([4, 3, 2, 1])); // Should return false
console.log(almostIncreasingSequence([1, 2, 3, 10000])); // Should return true
console.log(almostIncreasingSequence([10000, 1, 2, 3])); // Should return true
console.log(almostIncreasingSequence([1, 2, 2, 3, 4])); // Should return true

console.log(almostIncreasingSequence([1, 2, 5, 3, 4, 6])); // Should return true

console.log(almostIncreasingSequence([3, 1, 2, 4])); // Should return true
console.log(almostIncreasingSequence([1, 2, 3, 0])); // Should return true
console.log(almostIncreasingSequence([1, 3, 2, 1, 0])); // Should return false
console.log(almostIncreasingSequence([1])); // Should return true
console.log(almostIncreasingSequence([2, 1])); // Should return true
