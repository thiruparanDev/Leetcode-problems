/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        let max=nums.length-1
    let min=0
    while(min<=max){
        let mid = Math.floor((min+max)/2)
        if (target===nums[mid])return mid
        if(target>nums[mid]) min=mid+1
        else max=mid-1
        if (max<min){
            if (target>nums[mid]) return mid+1
            else if (target<[nums[mid]]) return mid
        }
    }
};