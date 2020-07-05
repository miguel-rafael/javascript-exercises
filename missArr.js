function missArr(arr) {
    let sum = 0
    let missIndex
    arr.forEach((number, index) => {
        if (!number) missIndex = index
        else sum+=number
    });
    console.log('====Missing Number====', 100-sum)
    console.log('onIndex:', missIndex)
}

missArr([1,2,3,4,5,6,'',7,8,9,10])
