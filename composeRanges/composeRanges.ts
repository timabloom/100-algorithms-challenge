export function composeRanges(nums: number[]): string[] {
  let composeRanges: string[] = [];
  let range = "";
  for (let i = 0; i < nums.length; i++) {
    if (nums.length - 1 === i) {
      range += `${nums[i]}`;
      composeRanges.push(range);
    } else if (range === "") {
      range += `${nums[i]}`;
    } else if (nums[i] + 1 !== nums[i + 1]) {
      range += `->${nums[i]}`;
      composeRanges.push(range);
      range = "";
    }
  }
  return composeRanges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
