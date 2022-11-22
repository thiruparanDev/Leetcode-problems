/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0
    let count1=0
    for (let i=0;i<s.length;i++){
        if (s[i]===" "||i===0){

            if (s[i+1]!==undefined&&s[i+1]!==" ")count=0
                        if (i===0)j=i
            else j=i+1
            while (s[j]!==" "&&s[j]!==undefined){
                count1++
                count++
                j++
                i++
            }
        }
    }
        if (count1===0){
        let x=0
        for (let i of s){
            if (i!==" "){
                x++
            }
        }
        return x
    }
    else return count
};