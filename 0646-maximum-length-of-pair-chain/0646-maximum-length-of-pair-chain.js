/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    for (let i=1; i<pairs.length; i++){
        tempArr=pairs[i]
        for (var j=i-1;j>=0; j--){
            if(pairs[j][1]>tempArr[1]){
                pairs[j+1]=pairs[j]
            }
            else{
                break
            }
        }
        pairs[j+1]=tempArr
    }
    for (let k=1;k<pairs.length;k++){
        if (pairs[k-1][1]>=pairs[k][0]){
            pairs.splice(k,1)
            k--
        }
    }
    return pairs.length
};
