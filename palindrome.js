function isPalindrome (str) {
    const strArr = str.split('')
    const revStrArr = strArr.slice().reverse()
    console.log(strArr.join(), revStrArr.join())
    if (strArr.join() === revStrArr.join()) console.log('isPalindrome')
}

isPalindrome('racecar')