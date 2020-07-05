function stringRotator(str) {

const strArr = str.split('')
let newStr = ''
for (let i = str.length - 1; i>=0; i--) newStr += strArr[i]
console.log('========wat=======', newStr)
}

stringRotator('MIGUEL')