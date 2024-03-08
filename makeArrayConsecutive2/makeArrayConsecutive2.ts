export function makeArrayConsecutive2(statues: number[]): number {
  const statuesSorted = statues.sort((a, b) => a - b);
  let count = 0;
  for (
    let i = statuesSorted[0] + 1;
    i <= statuesSorted[statuesSorted.length - 1] - 1;
    i++
  ) {
    if (statuesSorted.indexOf(i) === -1) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
