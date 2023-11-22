export function arrayPreviousLess(items: number[]): number[] {
  let newArray: number[] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        newArray.push(items[j]);
        break;
      } else if (j === 0) {
        newArray.push(-1);
      }
    }
  }
  return newArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
