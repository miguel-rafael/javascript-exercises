// given an array of Numbers, find out if the array can be split where both sides valu are equal return false if can not

// const arr = [1,2,3,5,6,7,8,9,10,10,10,11]
const arr = [1,2,2,1]
let val1 = 0
for (let i = 0; i <arr.length; i++) {
    let x = 0
    let val2 = 0
    val1 += arr[i]
    
    for (x = i+1; x < arr.length; x++) {
        val2 += arr[x]
    }
    if (val1 === val2) {
        return console.log(`This array can be split equally: ${val1} - ${val2} \n Index: 0 - ${i+1} and Index: ${i+2} - ${arr.length}`)
    }
}
console.log('This array can not be split equally')