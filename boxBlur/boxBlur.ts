export function boxBlur(image: number[][]): number[][] {
  const imageRows = image.length;
  const imageColumns = image[0].length;
  const pixels = imageRows * imageColumns;
  let sumPixels = 0;
  for (let i = 0; i < imageRows; ++i) {
    const sumRow = image[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    sumPixels = sumPixels + sumRow;
  }
  const pixelblurValue = Math.floor(sumPixels / pixels);

  let newColumn: number[] = [];
  for (let i = 0; i < imageColumns - 2; ++i) {
    newColumn.push(pixelblurValue);
  }
  let blurredImage: number[][] = [];
  for (let i = 0; i < imageRows - 2; ++i) {
    blurredImage.push(newColumn);
  }
  return blurredImage;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
