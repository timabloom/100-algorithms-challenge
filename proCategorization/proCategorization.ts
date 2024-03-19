export function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  const proCategorization = {};
  const services: string[][][] = [];

  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (proCategorization.hasOwnProperty(preferences[i][j])) {
        proCategorization[preferences[i][j]].push(pros[i]);
      } else {
        proCategorization[preferences[i][j]] = [pros[i]];
      }
    }
  }

  const objectKeys = Object.keys(proCategorization).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  for (let i = 0; i < objectKeys.length; i++) {
    services.push([
      [objectKeys[i]],
      proCategorization[objectKeys[i]].sort((a: string, b: string) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      ),
    ]);
  }
  return services;
}

console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
