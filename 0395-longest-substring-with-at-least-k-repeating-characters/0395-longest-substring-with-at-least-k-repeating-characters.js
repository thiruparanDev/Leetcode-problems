/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const helper = (start, end)=>{
        if (end - start < k) return 0;
        const f = new Map()
        for (let i=start; i<end; i++){
            f.set(s[i],(f.get(s[i]) || 0)+1)
        }
        for (let m=start; m<end; m++){
            if (f.get(s[m])<k){
                let mNext = m+1
                while(f.get(s[mNext])<k&&mNext<end){
                    mNext++
                }
                return Math.max(helper(start,m),helper(mNext,end))
            }
        }
        return end-start
    }
    return helper(0,s.length)
};