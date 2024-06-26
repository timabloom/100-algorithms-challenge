export function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  let incorrectAttemps = 0;

  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === passcode) {
      incorrectAttemps = 0;
    } else {
      incorrectAttemps += 1;
    }
    if (incorrectAttemps === 10) return true;
  }
  return false;
}

console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111",
  ])
);
