/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let currentMask = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        while ((currentMask & nums[right]) !== 0) {
            currentMask ^= nums[left];
            left++;
        }
        
        currentMask |= nums[right];
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};