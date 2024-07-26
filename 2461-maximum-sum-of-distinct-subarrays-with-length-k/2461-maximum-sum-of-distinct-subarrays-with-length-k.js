/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    if (nums.length<k){
        return 0
    }
    const ma = new Map()
    const arr = []
    let sum = 0
    let maxSum = 0
    for (let i=0; i<nums.length;i++){
        ma.set(nums[i],(ma.get(nums[i])||0)+1)
        arr.push(nums[i])
        sum += nums[i]
        if (arr.length>k){
            removedItem = arr.shift()
            sum -= removedItem
            ma.set(removedItem,(ma.get(removedItem))-1)
            if (ma.get(removedItem)===0){
                ma.delete(removedItem)
            }
        }
        if (k===ma.size && k===arr.length){
            maxSum = Math.max(sum, maxSum)
        }
    }
    return maxSum
};