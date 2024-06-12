/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let totb = 0;
    let tota = 0;
    for (let j = 0; j < i; j++) {
      totb += nums[j];
    }
    for (let k = i + 1; k < nums.length; k++) {
      tota += nums[k];
    }
    if (i == 0 && tota == 0) {
      return 0;
    } else if (i == nums.length - 1 && totb == 0) {
      return nums.length - 1;
    } else if (totb === tota) {
      return i;
    }
  }
  return -1;
};