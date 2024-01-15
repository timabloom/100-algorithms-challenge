export function chunkyMonkey(arr: any[], size: number): any[][] {
  let newArray: any[][] = [];

  for (let i = 0; i < arr.length; i = i + size) {
    newArray.push(arr.slice(i, i + size));
  }

  return newArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
