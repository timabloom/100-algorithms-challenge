export function houseOfCats(legs: number): number[] {
  const humanLegsArray: number[] = [];
  let count = 0;
  for (let i = 0; i < legs; i += 2) {
    if (i + 4 !== legs) {
      humanLegsArray.push((count += 1));
    } else {
      count += 1;
    }
  }
  return humanLegsArray;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
