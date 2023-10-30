//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Solution:
// Approach-1
var majorityElement = function (nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > nums.length / 2) {
            return num;
        }
    }
};

// Approach-2
var majorityElement = function (nums) {
    nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length/2)]
};