export function allLongestStrings(inputArray: string[]): string[] {
  let longestString = 0;
  inputArray.forEach((letters) => {
    if (letters.length > longestString) {
      longestString = letters.length;
    }
  });

  const onlyLongestStrings = inputArray.filter(
    (letters) => letters.length === longestString
  );

  return onlyLongestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
