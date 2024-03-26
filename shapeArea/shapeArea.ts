export function shapeArea(n: number): number {
  if (n === 1) return 1;
  let area = 1;
  let expansion = 4;
  for (let i = 2; i <= n; i++) {
    area += expansion;
    expansion += 4;
  }
  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
