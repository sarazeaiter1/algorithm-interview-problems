/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result = i;
    else if (
      nums[i] < target &&
      (nums[i + 1] > target || nums[i + 1] === undefined)
    )
      result = i + 1;
  }
  return result;
}

// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0));
