/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let currentList = []
    let finaList = []
    let chars = ""
    finaList.push(products)
    for (let i=0; i<searchWord.length; i++){
        chars += searchWord[i]
        let list = []
        for (let j=0; j<(finaList[finaList.length-1]).length; j++){
            let currentWord = finaList[finaList.length-1][j]
            if ((currentWord.length-1)>=i && chars === currentWord.slice(0,i+1)){
                list.push(currentWord)
            }
        }
            finaList.push(list)
    }
    let list = finaList.slice(1)
    for(let i=0; i<list.length; i++){
        list[i].sort()
        if (list[i].length>3){
            list[i] = list[i].slice(0,3)
        }
    }
    return list
};