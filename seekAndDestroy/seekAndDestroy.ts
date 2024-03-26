export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((element) => {
    if (!arr2.includes(element)) {
      return element;
    }
  });
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
