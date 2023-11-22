export function avoidObstacles(inputArray: number[]): number {
  const maxValue = Math.max(...inputArray);
  let jumpLength = 1;
  let jumpSuccess = false;

  while (!jumpSuccess) {
    jumpSuccess = true;
    for (let i = 0; i <= maxValue; i += jumpLength) {
      if (inputArray.includes(i)) {
        jumpLength++;
        jumpSuccess = false;
        break;
      }
    }
  }

  return jumpLength;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
