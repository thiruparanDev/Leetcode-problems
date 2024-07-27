/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const helper = (start, end)=>{
        if ((end-start) <k){
            return 0
        }
        const ma = new Map()
        for (let i=start;i<end;i++){
            ma.set(s[i],(ma.get(s[i])||0)+1)
        }
        for (let mid=start;mid<end;mid++){
            if (ma.get(s[mid])<k){
                let midNext = mid+1
                while(ma.get(s[midNext])<k&&midNext<end){
                    midNext++
                }
            return                      Math.max(helper(start,mid),helper(midNext,end))
            }
        }
        return end-start
    }
    return helper (0,s.length)
};