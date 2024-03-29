export function switchLights(a: number[]): number[] {
  const lights = [...a];
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] === 1) {
      for (let j = i; j >= 0; j--) {
        if (lights[j] === 0) {
          lights[j] = 1;
        } else {
          lights[j] = 0;
        }
      }
    }
  }
  return lights;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
