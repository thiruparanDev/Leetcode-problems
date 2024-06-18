/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
        sum = Array.from(nums)
    for (let i=1;i<sum.length;i++){
        sum[i]=sum[i-1]+sum[i]
    }
    return sum
};

