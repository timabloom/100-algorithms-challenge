export function validTime(time: string): boolean {
  const [h, m] = time.split(":");
  if (parseInt(h) > 23 || parseInt(h) < 0) {
    return false;
  } else if (parseInt(m) > 59 || parseInt(m) < 0) {
    return false;
  }
  return true;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
