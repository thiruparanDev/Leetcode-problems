/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = []
    const windowLength = p.length
    if (windowLength>s.length){
        return []
    }
    const charAtStart = 'a'.charCodeAt(0)
    const sCode = Array(26).fill(0)
    const pCode = Array(26).fill(0)
    for (let i=0; i<windowLength; i++){
        pCode[p[i].charCodeAt(0)-charAtStart]++
    }
    for (let i=0; i<windowLength; i++){
        sCode[s[i].charCodeAt(0)-charAtStart]++
    }
    const matches = (sCode,pCode)=>{
        for (let i=0;i<26;i++){
            if (sCode[i]!==pCode[i]){
                return false
            }
        }
        return true
    }
    for (let i=0; i<=s.length-windowLength;i++){
        if (i>0){
            sCode[s[i-1].charCodeAt(0)-charAtStart]--
            sCode[s[i+windowLength-1].charCodeAt(0)-charAtStart]++  
        }
        if (matches(sCode,pCode)){
            result.push(i)
        }
    }
    return result
    // const n = p.length
    // let ma = new Map()
    // let li = []
    // const final = []
    // for (let i=0; i<s.length;i++){
    //     if (p.includes(s[i])){        
    //         li.push(s[i])
    //         ma.set(s[i],(ma.get(s[i])||0)+1)
    //         if (li.length>n){
    //             const removed = li.shift()
    //             ma.set(removed,(ma.get(removed)-1))
    //             if (ma.get(removed)===0){
    //                 ma.delete(removed)
    //             }
    //         }
    //         if (li.length===n && ma.size ===n){
    //             final.push(i+1-n)
    //         }
    //     }
    //     else {
    //         ma = new Map()
    //         li = []
    //     }
    // }
    // return final
};