/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates1(nums: number[]): number {
  nums.splice(0, nums.length, ...new Set(nums))
  console.log(nums)
  return nums.length;
}


/* when we splice in the middle of array, we should
add iterate value -1 to cover the next item, bcz if 
we don't, then we are missing an item 
Ex: [0,0,1,1] => when i is 1 and 0 is in map nums value
will become [0,1,1] and i will be 2 by then, which means
that we are missing the 1 of i=1 [0,1,1].*/


function removeDuplicates2(nums: number[]): number {
  const hashMap = []
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] !== undefined) {
      nums.splice(i, 1)
      i--;
    } else {
      hashMap[nums[i]] = 1
    }
  }
  return nums.length
}

function removeDuplicates3(nums: number[]): number {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      nums.splice(i, 1)
      i--;
    } else {
      map.set(nums[i], 1);
    }
  }
  return nums.length
}

/* because we have a sorted array we can skip the map
and directly remove the current value if it is equal 
to the next one */
/*
this is a O(n^2) solution, let's try to make it better
*/
function removeDuplicates4(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1)
        j--
      }

    }
  }
  console.log(nums)
  return nums.length
}


/* 2 pointers: pointer1 will get increased only in case nums[pointer1]!==nums[pointer2]
 which means that pointer1 is calculating the number of unique values
 and placing them at the beginning of the array
 later we can splice the array from start pointer1+1 until length. */
function removeDuplicates(nums: number[]): number {
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++
      nums[pointer1] = nums[pointer2]
    }
  }
  nums.splice(pointer1 + 1, nums.length)
  return pointer1 + 1
}

// @lc code=end

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));