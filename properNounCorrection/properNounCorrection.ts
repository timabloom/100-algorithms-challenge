export function properNounCorrection(noun: string): string {
  const nounUpperCase = noun.toLocaleUpperCase().slice(0, 1);
  const nounLowerCase = noun.toLocaleLowerCase().slice(1);
  return nounUpperCase.concat("", nounLowerCase);
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
