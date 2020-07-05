// How do you find all pairs of an integer array whose sum is equal to a given number?
// 10
function pair (arr, sum) {
    let finalArr = []
    let val1 = 0
    let val2 = 0
    for (let i = 0; i<arr.length; i++) {
        val1 = arr[i]
        for (let j = i+1; j<arr.length; j++) {
            val2 = arr[j]
            if ((val1+val2) === sum) {
                const pairArr = `${val1}, ${val2}`
                if (!finalArr.includes(pairArr)) finalArr.push(pairArr)
            }
        }
    }
}
pair([5,5,7,3,6,4,5,5,5,5,5,5], 10)