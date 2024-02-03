export function fancyRide(l: number, fares: number[]): string {
  const ubers = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  for (let i = fares.length - 1; i >= 0; i--) {
    const cost = fares[i] * l;
    if (cost <= 20) {
      return ubers[i];
    }
  }
  return "none";
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
