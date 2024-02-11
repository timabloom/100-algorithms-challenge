export function firstNotRepeatingCharacter(s: string): string {
  const charArray = s.split("");
  const charObject = {};
  let index = -1;
  for (let i = 0; i < s.length; i++) {
    const char = charArray[i];
    if (!charObject.hasOwnProperty(charArray[i])) {
      charObject[char] = 1;
    } else {
      charObject[char]++;
    }
    if (charObject[char] === 1 && index === -1) {
      index = i;
    } else if (charObject[char] > 1 && char === charArray[index]) {
      index = -1;
    }
  }

  return index === -1 ? "_" : charArray[index];
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
