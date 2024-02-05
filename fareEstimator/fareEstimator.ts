export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const rideCosts: number[] = [];

  for (let i = 0; i < cost_per_mile.length; i++) {
    const cost =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    rideCosts.push(parseFloat(cost.toFixed(1)));
  }
  return rideCosts;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
