export function adjacentElementsProduct(inputArray: number[]): number {
  const productsArray: number[] = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    productsArray.push(inputArray[i] * inputArray[i + 1]);
  }
  productsArray.sort();

  const largestProduct = productsArray[productsArray.length - 1];

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
