export function alphabeticShift(inputString: string): string {
  let newString = "";

  for (let i = 0; i < inputString.length; i++) {
    const UTFCode = inputString.charCodeAt(i);
    if (UTFCode === 122) {
      newString = newString + "a";
    } else {
      const newChar = String.fromCharCode(UTFCode + 1);
      newString = newString + newChar;
    }
  }
  return newString;
}

console.log(alphabeticShift("crazy"));
