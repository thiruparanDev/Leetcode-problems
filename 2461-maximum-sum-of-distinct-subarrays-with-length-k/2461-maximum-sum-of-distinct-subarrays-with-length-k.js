/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    // if (nums.length<k){
    //     return []
    // }
    // let maxSum = 0
    // for (let i=0;i<=nums.length-k;i++){
    //     let sum = 0
    //     let arr = []
    //     let broken = false
    //     for (let j=i; j<i+k; j++){
    //         if (arr.includes(nums[j])){
    //             broken = true
    //             break
    //         }
    //         else {
    //             sum+=nums[j]
    //             arr.push(nums[j])
    //         }
    //     }
    //     if (!broken && sum>maxSum){
    //         maxSum = sum
    //     }
    // }
    // return maxSum
    // if (nums.length<k){
    //     return []
    // }
    // let maxSum = 0
    // for (let i=0;i<=nums.length-k;i++){
    //     let sum = 0
    //     let arr = []
    //     let broken = false
    //     for (let j=i; j<i+k; j++){
    //         if (arr.includes(nums[j])){
    //             broken = true
    //             break
    //         }
    //         else {
    //             sum+=nums[j]
    //             arr.push(nums[j])
    //         }
    //     }
    //     if (!broken && sum>maxSum){
    //         maxSum = sum
    //     }
    // }
    // return maxSum
    if (nums.length<k){
        return 0
    }
    const arr = []
    const se = new Map()
    let maxSum = 0
    let sum = 0
    for (let i=0; i<nums.length; i++){
        arr.push(nums[i])
        se.set(nums[i],(se.get(nums[i])||0)+1)
        sum += nums[i]
        if (arr.length>k){
            const removedElement = arr.shift()
            se.set(removedElement,se.get(removedElement)-1)
            if (se.get(removedElement)==0){
                se.delete(removedElement)
            }
            sum -= removedElement
        }
        if(se.size === k && arr.length ===k){
            maxSum = Math.max(maxSum,sum)
        }
    }
    return maxSum
};