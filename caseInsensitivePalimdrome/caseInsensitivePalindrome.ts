export function isCaseInsensitivePalindrome(inputString: string): boolean {
  const lowerCase = inputString.toLowerCase();
  const lowerCaseReversed = lowerCase.split("").reverse().join("");
  if (lowerCase === lowerCaseReversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
