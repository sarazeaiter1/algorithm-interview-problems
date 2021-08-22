/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// O(n)
function twoSum1(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

// O(n)
function twoSum2(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [hash[target - num], i];
    } else {
      hash[num] = i;
    }
  }
  return [];
}

// O(n^2)
// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
