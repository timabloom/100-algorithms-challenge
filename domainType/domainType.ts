export function domainType(domains: string[]): string[] {
  const domainTypes = [
    ["organization", "org"],
    ["commercial", "com"],
    ["network", "net"],
    ["information", "info"],
  ];
  const chosenDomains: string[] = [];
  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split(".");
    for (let i = 0; i < domainTypes.length; i++) {
      if (domainParts.includes(domainTypes[i][1])) {
        chosenDomains.push(domainTypes[i][0]);
      }
    }
  }
  return chosenDomains;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
