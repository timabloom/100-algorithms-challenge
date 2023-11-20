export function alphabetSubsequence(s: string): boolean {
  const inputLowerCase = s.toLowerCase();
  let UTFCodeValue = inputLowerCase.charCodeAt(0);

  for (let i = 1; i < inputLowerCase.length; i++) {
    const UTFCodeNextValue = inputLowerCase.charCodeAt(i);
    if (UTFCodeValue >= UTFCodeNextValue) {
      return false;
    }
    UTFCodeValue = UTFCodeNextValue;
  }
  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
