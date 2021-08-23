/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement1(nums: number[], val: number): number {
  nums.splice(0, nums.length, ...nums.filter(value => val !== value))
  return nums.length
};

// when using splice if for loop remember to do i--
function removeElement2(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

/* 
  i is the number of values that are different than val,
  we need to increment it each time val # nums[j].
  But we also have to change nums to remove val from it
  => We have to replace val in nums by the values that are # val
  for that we do, nums[i] = nums[j] before incrementing i
  Example: nums=[3,2,2,3] and val=3 => we have to replace nums[0] by nums[1]
  to do so, we replace nums[i] by nums[j] because i is 0 as nums[j](=3) !== val(=3) is false
  and nums[j] is incrementing normally so it is nums[1] => 2
*/
function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  nums.splice(i, nums.length)
  return i;
}
// @lc code=end
