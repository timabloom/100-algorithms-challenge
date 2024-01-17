export function confirmEnding(str: string, target: string) {
  for (let i = str.length; i > 0; i--) {
    const endStr = str.substring(i - 1, str.length);
    if (endStr === target) {
      return true;
    }
  }
  return false;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
