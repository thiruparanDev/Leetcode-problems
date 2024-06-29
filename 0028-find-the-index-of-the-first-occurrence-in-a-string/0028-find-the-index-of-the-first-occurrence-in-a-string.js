/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i=0;  i<=haystack.length-1; i++){
        let j=0
        for (j=0;  j<=needle.length-1; j++){
            if (haystack[i+j] === needle[j]){
            }
            else {
                break;
            }
        }
        if (j===needle.length){
            return i
        }
    }
    return -1
};