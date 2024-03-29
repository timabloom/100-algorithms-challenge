export function uniqueDigitProducts(a: number[]): number {
  const uniqueProducts: number[] = [];
  for (let i = 0; i < a.length; i++) {
    const digits = a[i].toString().split("");
    const product = digits.reduce((acc, curr) => acc * parseInt(curr), 1);
    if (!uniqueProducts.includes(product)) {
      uniqueProducts.push(product);
    }
  }
  return uniqueProducts.length;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
