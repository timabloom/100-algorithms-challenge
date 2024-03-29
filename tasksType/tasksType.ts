export function tasksTypes(deadlines: number[], day: number): number[] {
  const labels: number[] = [0, 0, 0];
  for (let i = 0; i < deadlines.length; i++) {
    if (deadlines[i] <= day) {
      labels[0] += 1;
    } else if (deadlines[i] <= day + 7) {
      labels[1] += 1;
    } else [(labels[2] += 1)];
  }
  return labels;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
