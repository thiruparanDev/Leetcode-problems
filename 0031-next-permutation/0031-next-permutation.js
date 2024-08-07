/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let a = 0
    for (let i=nums.length-1; i>0; i--){
        if (nums[i]>nums[i-1]){
            let minIndex = i
            if (nums[i+1]){
                for (let l=i+1; l<nums.length; l++){
                    if(nums[minIndex]>nums[l]&&nums[i-1]<nums[l]){
                        minIndex = l
                    }
                }
            }
            let temp = nums[minIndex]
            nums[minIndex] = nums[i-1]
            nums[i-1] = temp
            a = i
            break
        }
    }
  for(let j = a; j<nums.length-1; j++){
        let min = j
        for (let k = j+1; k<nums.length; k++){
            if (nums[k]<nums[min]){
                min = k
            }
        }
        if (min !==j){
            let m = nums[j]
            nums[j] = nums[min]
            nums[min] = m
        }
    }
};