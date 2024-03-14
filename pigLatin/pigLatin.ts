export function pigLatin(str: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const strArray = str.split("");
  const pigLatin = [...strArray];
  let vowelFirst = false;
  let consonantCluster = true;

  for (let i = 0; i < str.length; i++) {
    const vowel = vowels.find((consonant) => consonant === strArray[i]);
    if (vowel && i === 0) {
      vowelFirst = true;
    } else if (vowel) {
      consonantCluster = false;
    } else if (consonantCluster) {
      pigLatin.push(strArray[i]);
      pigLatin.shift();
    }
  }

  if (vowelFirst) {
    pigLatin.push("way");
  } else {
    pigLatin.push("ay");
  }

  return pigLatin.join("");
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
