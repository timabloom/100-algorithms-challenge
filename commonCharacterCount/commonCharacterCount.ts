export function commonCharacterCount(s1: string, s2: string): number {
  const array1 = s1.split("");
  const array2 = s2.split("");

  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    const index = array2.findIndex((element) => element === array1[i]);
    if (index > -1) {
      array2.splice(index, 1);
      count++;
    }
  }
  return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
