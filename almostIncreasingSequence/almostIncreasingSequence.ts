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
