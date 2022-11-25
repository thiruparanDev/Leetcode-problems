/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let arr=[]
    for (let i=0;i<nums.length;i++){
        if (i>0&&nums[i]===nums[i-1])continue
        let minIdx=i+1
        let maxIdx=nums.length-1
        while(minIdx<maxIdx){
            let sum=nums[maxIdx]+nums[minIdx]+nums[i]
            if(sum===0){
                arr.push([nums[i],nums[minIdx],nums[maxIdx]])
                while (nums[minIdx]===nums[minIdx+1]){minIdx++}
                while (nums[maxIdx]===nums[maxIdx-1]){maxIdx--}
                minIdx++
                maxIdx--
            }
            else if(sum>0){
                maxIdx--
            }
            else if(sum<0){
                minIdx++
            }
        }
    }
    return arr
};