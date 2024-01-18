export function containsCloseNums(nums: number[], k: number): boolean {
  let indices = {};
  for (let i = 0; i < nums.length; i++) {
    indices[i] = nums[i];
    for (let j = 0; j < i; j++) {
      if (indices[j] === nums[i]) {
        return Math.abs(j - i) === k;
      }
    }
  }
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
