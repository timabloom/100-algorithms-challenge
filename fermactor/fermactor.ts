export function fermactor(n: number): number[] {
  const arrayCD: number[] = [];
  let c = 0;
  while (c !== n) {
    for (let i = 0; i < n; i++) {
      if (Math.pow(c, 2) - Math.pow(i, 2) === n) {
        arrayCD.push(c, i);
        return arrayCD;
      }
    }
    c++;
  }
  return arrayCD;
}

console.log(fermactor(15));
