export function lateRide(n: number): number {
  const h = Math.floor(n / 60).toString();
  const m = (n % 60).toString();

  const hourFormated = addZeros(h);
  const minutesFormated = addZeros(m);
  const clockFormatTime = hourFormated.concat("", minutesFormated);

  const clockFormatArray = clockFormatTime.split("");
  const sumDigits = clockFormatArray.reduce(
    (acc, curr) => acc + parseInt(curr),
    0
  );
  return sumDigits;
}

function addZeros(time: string) {
  if (time.length === 1) return (time = `0${time}`);
  return time;
}

console.log(lateRide(240));
console.log(lateRide(808));
