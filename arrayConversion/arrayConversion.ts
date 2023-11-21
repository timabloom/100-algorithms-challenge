export function arrayConversion(inputArray: number[]): number {
  let iterationsCount = 0;
  let currentArray = inputArray;

  while (currentArray.length !== 1) {
    let newArray: number[] = [];
    for (let i = 0; i < currentArray.length; i += 2) {
      if (iterationsCount % 2 === 0) {
        newArray.push(currentArray[i] + currentArray[i + 1]);
      } else {
        newArray.push(currentArray[i] * currentArray[i + 1]);
      }
    }
    iterationsCount++;
    currentArray = newArray;
  }
  return currentArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
