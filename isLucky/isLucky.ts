export function isLucky(n: number): boolean {
  const ticket = n.toString();

  const startNumbers = ticket.slice(0, ticket.length / 2).split("");
  const endNumbers = ticket.slice(ticket.length / 2).split("");

  const sumStart: number = getSum(startNumbers);
  const sumEnd: number = getSum(endNumbers);

  return sumStart === sumEnd;
}

function getSum(numbersArray: string[]) {
  return numbersArray.reduce(
    (acc: number, curr: string) => acc + parseInt(curr),
    0
  );
}

console.log(isLucky(1230));
console.log(isLucky(239017));
