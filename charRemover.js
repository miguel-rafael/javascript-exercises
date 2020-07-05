/* Write a function that takes two parameters, a string and an integer. The function will return another string that is similar to the input string, but with certain characters removed. It's going to remove characters from consecutive runs of the same character, where the length of the run is greater than the input parameter. */

function charRemover(str='', int=0) {
    //charAt
    const strArr = str.split('')
    let prevChar = ''
    let currentCharNum = 0
    let newString = ''
    strArr.forEach( i => {
        if (i === prevChar) currentCharNum +=1
        else {
            currentCharNum=0
            prevChar = i
        }
        if (currentCharNum < int) newString += i
    })
    console.log(newString)
}

charRemover('aaabbbaaa', 2)