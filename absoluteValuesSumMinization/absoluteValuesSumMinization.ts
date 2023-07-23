export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  if (isEven) {
    const medianLeft = a[a.length / 2 - 1];
    return medianLeft;
  } else {
    const index = Math.floor(a.length / 2);
    const median = a[index];
    return median;
  }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
