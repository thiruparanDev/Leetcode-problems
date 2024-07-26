/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length<p.length){
        return []
    }
        const result = []
    const pCode = Array(26).fill(0)
    const sCode = Array(26).fill(0)
    const charCode = 'a'.charCodeAt(0)
    const windowLength = p.length
    for (let i=0;i<windowLength; i++){
        pCode[p[i].charCodeAt(0)-charCode]++
    }
    for (let i=0;i<windowLength; i++){
        sCode[s[i].charCodeAt(0)-charCode]++
    }
    const matches = (sCode,pCode)=>{
        for (let i=0; i<26; i++){
            if (sCode[i] !== pCode[i]){
                return false
            }
        }
        return true
    }
    for (let i=0; i<=s.length-windowLength; i++){
        if (i>0){
             sCode[s[i-1].charCodeAt(0)-charCode]--
             sCode[s[i+windowLength-1].charCodeAt(0)-charCode]++
        }
        if (matches(sCode,pCode)){
            result.push(i)
        }
    }
    return result
};