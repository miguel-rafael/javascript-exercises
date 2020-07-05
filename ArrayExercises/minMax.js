function minMax(arr) {
    let min = -1
    let max = -1
    
    for(let i = 0; i<arr.length; i++) {
        let sum = 0
        for(let z = 0; z<arr.length; z++) {
            if(z!=i) sum += arr[z] 
        }
        if (sum < min || min < 0) min = sum
        if (sum > max || max < 0) max = sum
    }
    console.log(min, max)
}