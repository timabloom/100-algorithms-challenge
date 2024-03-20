export function reflectString(inputString: string): string {
  const alphabetReflection = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };
  const letters = inputString.split("");
  let reflection = "";
  for (let i = 0; i < letters.length; i++) {
    const letterReflection: string = alphabetReflection[letters[i]];
    reflection += letterReflection;
  }
  return reflection;
}

console.log(reflectString("name"));
