export function compareIntegers(a: string, b: string): string {
  if (parseInt(a) > parseInt(b)) {
    return "greater";
  } else if (parseInt(a) < parseInt(b)) {
    return "less";
  }
  return "equal";
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
