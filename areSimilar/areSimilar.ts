export function areSimilar(a: number[], b: number[]): boolean {
  const sumOfA = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumOfB = b.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (sumOfA !== sumOfB) {
    return false;
  }
  
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count = count + 1;
      if (count > 2) {
        return false;
      }
    }
  }
  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
