export function missingLetters(str: string): any {
  const lettersArray = str.split("");

  if (lettersArray[0] !== "a") return "a";

  for (let i = 1; i < lettersArray.length; i++) {
    const currentLetter = lettersArray[i].charCodeAt(0);
    const previousletter = lettersArray[i - 1].charCodeAt(0);

    if (currentLetter !== previousletter + 1) {
      return String.fromCharCode(previousletter + 1);
    }
  }
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
