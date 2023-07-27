export function addTwoDigits(n: any): number {
  const digitsArray: string[] = n.toString().split("");

  let sum = 0;

  digitsArray.forEach((digit) => {
    sum += parseInt(digit);
  });

  return sum;
}

console.log(addTwoDigits(29));
