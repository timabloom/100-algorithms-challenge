export function lateRide(n: number): number {
  const h = Math.floor(n / 60).toString();
  const m = (n % 60).toString();

  const time = h.concat("", m);

  const timeArray = time.split("");
  const sumDigits = timeArray.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sumDigits;
}

console.log(lateRide(240));
console.log(lateRide(808));
