export function newNumeralSystem(number: string): string[] {
  const unorderedPairs: string[] = [];
  const a = "A".charCodeAt(0);
  const max = number.charCodeAt(0);
  const maxDigit = max - a;
  for (let i = a; i <= max - Math.ceil(maxDigit / 2); i++) {
    const digit1 = i - a;
    for (let j = i; j <= max; j++) {
      const digit2 = j - a;
      if (digit1 + digit2 === maxDigit && digit1 + 1 !== digit2) {
        unorderedPairs.push(
          `${String.fromCharCode(i)} + ${String.fromCharCode(j)}`
        );
      }
    }
  }
  return unorderedPairs;
}

console.log(newNumeralSystem("G"));
