export function stringsConstruction(a: string, b: string): number {
  const letterDuplicates = addDuplicateChar(b);
  const letterPatternDuplicates = addDuplicateChar(a);
  const pattern = a.split("");
  const copies: number[] = [];
  for (let i = 0; i < pattern.length; i++) {
    const amount = Math.floor(
      letterDuplicates[pattern[i]] / letterPatternDuplicates[pattern[i]]
    );
    copies.push(amount);
  }
  return Math.min(...copies);
}

function addDuplicateChar(letters: string) {
  const duplicates = {};
  for (let letter of letters.split("")) {
    if (!duplicates.hasOwnProperty(letter)) {
      duplicates[letter] = 1;
    } else {
      duplicates[letter] += 1;
    }
  }
  return duplicates;
}

console.log(stringsConstruction("abc", "abccba"));
