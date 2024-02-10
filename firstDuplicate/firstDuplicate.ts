export function firstDuplicate(a: number[]): number {
  let duplicate = -1;
  let index = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (index === 0 && a[i] === a[j]) {
        index = j;
        duplicate = a[j];
      } else if (index > j && a[i] === a[j]) {
        index = j;
        duplicate = a[j];
      }
    }
  }
  return duplicate;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
