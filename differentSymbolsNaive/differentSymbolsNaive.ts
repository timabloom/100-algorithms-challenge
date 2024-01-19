export function differentSymbolsNaive(s: string): number {
  const allCharacters: string[] = s.split("");
  const uniqueCharacters: string[] = [];
  for (let i = 0; i < allCharacters.length; i++) {
    if (!uniqueCharacters.includes(allCharacters[i])) {
      uniqueCharacters.push(allCharacters[i]);
    }
  }
  return uniqueCharacters.length;
}

console.log(differentSymbolsNaive("cabca"));
