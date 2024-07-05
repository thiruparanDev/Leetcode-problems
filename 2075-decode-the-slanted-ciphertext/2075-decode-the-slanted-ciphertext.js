/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    const letPerRow = encodedText.length/rows
    let origText = ""
    for (let j=1; j<= letPerRow; j++){
        for (let i=1; i<=rows; i++){
            pos = i+j + (i-1)*letPerRow - 2
            if (encodedText[pos] === undefined){
                return origText.trimEnd()
            }
        origText += encodedText[pos]
        }
    }
    return origText.trimEnd()
};