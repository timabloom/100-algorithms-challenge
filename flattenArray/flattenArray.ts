export function flattenArray(arr: any[]): any[] {
  const flatArrayStart: any[] = arr.flat();
  const flatArrayFinal: any[] = [];
  for (let i = 0; i < flatArrayStart.length; i++) {
    if (Array.isArray(flatArrayStart[i])) {
      const flatValue = flatArrayStart[i].flat();
      flatArrayFinal.push(flatValue[0]);
    } else {
      flatArrayFinal.push(flatArrayStart[i]);
    }
  }
  return flatArrayFinal;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
