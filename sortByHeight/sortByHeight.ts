export function sortByHeight(a: number[]): number[] {
  const humans = a.filter((value) => value !== -1).sort((a, b) => a - b);
  const sortedArray = a.map((element) => {
    if (element !== -1) {
      const human = humans[0];
      humans.shift();
      return (element = human);
    } else {
      return element;
    }
  });
  return sortedArray;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
