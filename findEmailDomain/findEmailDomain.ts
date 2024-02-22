export function findEmailDomain(address: string): string {
  const index = address.lastIndexOf("@");
  return address.slice(index + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

// Original commit message is wrong. Changing to solved challenge 71