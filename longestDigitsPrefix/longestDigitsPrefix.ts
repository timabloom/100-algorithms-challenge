export function longestDigitsPrefix(inputString: string): string {
  const digits = inputString.search(/[0-9]/);
  if (digits === -1) return "";

  const charactersArray = inputString.split("");
  let lettersRemoved = "";
  for (const character of charactersArray) {
    const digit = character.search(/[0-9]/);
    if (digit !== -1) {
      lettersRemoved = `${lettersRemoved}${character}`;
    } else {
      lettersRemoved = `${lettersRemoved}_`;
    }
  }
  return lettersRemoved.split("_").sort((a, b) => b.length - a.length)[0];
}

console.log(longestDigitsPrefix("123aa1"));
