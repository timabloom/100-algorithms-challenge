export function ratingThreshold(
  threshold: number,
  ratings: number[][]
): number[] {
  const prosBelowThreshold: number[] = [];
  for (let i = 0; i < ratings.length; i++) {
    const rating =
      ratings[i].reduce((acc, curr) => acc + curr, 0) / ratings[i].length;
    if (rating < threshold) {
      prosBelowThreshold.push(i);
    }
  }
  return prosBelowThreshold;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
