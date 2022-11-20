/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i=0;i<nums.length;i++){
        for(let k=i;k<nums.length;k++){
            if(nums[i]===nums[k]&i!==k){
                nums.splice(k,1)
                k--
            }
        }
    }
    let len=nums.length
    return len

};