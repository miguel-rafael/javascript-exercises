const arr = [1,2,3,4,2]

function arrSplit(arr) {
    let val1 = 0
    for (let i = 0; i<arr.length; i++) {
        val1 += arr[i]
        let val2 = 0
        for (let x=i+1; x<arr.length; x++) {
            val2 += arr[x]
        }
        if(val1 === val2) return `TRUE: Array ${arr} can be split with both sides equal on index ${i}`
    }
}

const results = arrSplit(arr)
console.log(results)