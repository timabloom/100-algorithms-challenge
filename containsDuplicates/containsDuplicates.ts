export function containsDuplicates(a: number[]): boolean {
  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    a.shift();
    return a.includes(value) === true;
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
