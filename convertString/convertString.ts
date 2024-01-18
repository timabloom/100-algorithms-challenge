export function convertString(s: string, t: string): boolean {
  if (s.length < t.length) {
    return false;
  }

  let string1 = s.split("");
  const string2 = t.split("");
  for (let i = 0; i < string2.length; i++) {
    const index = string1.indexOf(string2[i]);
    if (index > -1) {
      string1 = string1.slice(index);
    } else return false;
  }
  return true;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
