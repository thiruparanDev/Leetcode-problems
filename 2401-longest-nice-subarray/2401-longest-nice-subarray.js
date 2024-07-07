/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    // let nice = 1
    // let i=0
    // let j=i+1
    // let dummyj = j
    // let elements = 2
    // let fail = false
    // while(j<nums.length){
    //     while (dummyj<nums.length){
    //         for (let l = i; l<j; l++){
    //             for (let k=l; k<dummyj; k++){
    //                 if (nums[k]&nums[j] !== 0){
    //                     fail = true
    //                     break;
    //                 }
    //             }
    //             if (fail){
    //                 break;
    //             }
    //         }
    //         if (fail){
    //             break;
    //         }
    //         else {
    //             dummyj++
    //             elements++
    //         }
    //     }
    //     if (!fail){
    //         nice = elements
    //     }
    //     else {
    //         nice = elements-1
    //     }
    //     i++
    //     j=i+1
    //     elements = 2
    //     dummyj = j
    //     fail = false
    // }
    // return nice
    
    let nice = 1
    let i=0
    let j=i+1
    let dummyj = j
    let elements = 1
    let fail = false
    while(j<nums.length){
        while (dummyj<nums.length){
            elements++
            for (let k=i; k<dummyj; k++){
                if ((nums[k]&nums[dummyj]) !== 0){
                    fail = true
                    break;
                }
            }
            if (fail){
                break;
            }
            else {
                dummyj++
            }
        }
        if (!fail){
            if (nice<elements){
                nice = elements
            }
        }
        else {
            if (nice<(elements-1)){
                nice = elements-1
            }
        }
        i++
        j=i+1
        elements = 1
        dummyj = j
        fail = false
    }
    return nice
};