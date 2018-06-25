const wrap = ( inStr, col ) => {
    if (inStr === '' ){
        return '';
    }

    //text, column
    //get column amount of chars

    //go back to next space
    const firstLine = splitByNChars( inStr, col ); 
    //make a split

    //put the left part in its own line

    //repeat the process

}

function splitByNChars( str, n ){
    //what happens str empty
    const firstN = str.slice(0, n)
    let lineBreak = n - 1;
    while ( str.charAt(lineBreak) !== ' ' ){
        //what happens when col < a word
        if(lineBreak === 0){
            const words = str.split(' ');
            return words[0];
        }
        lineBreak -= 1;
    }
    return {  
        firstLine: firstN.slice(0, lineBreak).trim(),
        remainingLines: firstN.slice(lineBreak).trim(),
    }
}

module.exports = {
    wrap,
    splitByNChars,
}