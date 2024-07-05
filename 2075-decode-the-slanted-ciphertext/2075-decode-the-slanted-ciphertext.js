/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    const letPerRow = encodedText.length/rows
    let origText = ""
    for (let j=1; j<= letPerRow; j++){
        // let count = 0;
        // let emptCount = 0;
        for (let i=1; i<=rows; i++){
        // count++;
        pos = i+j + (i-1)*letPerRow - 2
        if (encodedText[pos] === undefined){
            return origText.replace(/\s+$/, '')
        }
        if (encodedText[pos] === ' '){
            // emptCount++;
        }
        origText += encodedText[pos]
        }
        // if (count === emptCount){
        //     origText = origText.substring(0, str.length-emptCount)
        //     break;
        // }
    }
    return origText.replace(/\s+$/, '')
};