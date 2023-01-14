/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let obj=[];
    for (let i=0; i<rows;i++){
        for (let j=0;j<cols;j++){
            obj.push([i,j])
        }
    }
    obj.sort(function(a,b){return Math.abs(a[0]-rCenter)+Math.abs(a[1]-cCenter)-(Math.abs(b[0]-rCenter)+Math.abs(b[1]-cCenter))})
    return obj
};