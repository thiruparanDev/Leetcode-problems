/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
      let arr1=[]
    const reverse1 = (arr,n)=>{
        for (let i=0;i<=n/2;i++){
            let temp=arr[n-i]
            arr[n-i]=arr[i]
            arr[i]=temp
        }
    }
    let count=0
    for (let i=0;i<arr.length;i++){
        if (arr[i]===i+1){
            count++
        }
    }
    if (count==arr.length){
        return arr1
    }
    for (let i=0; i<arr.length-1;i++){
        panNo=arr.indexOf(Math.max(...arr.slice(0,arr.length-i)));
        if(panNo===arr.length-1)continue
        if (panNo!==0){
            reverse1(arr,panNo)
            arr1.push(panNo+1)
        }
        reverse1(arr,arr.length-1-i)
        arr1.push(arr.length-1-i+1)
    }
    return arr,arr1
};