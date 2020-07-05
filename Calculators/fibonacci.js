function fibo (x=0) {
    console.log('what it do babyyy')
    // Create a function that outputs the n order of the fibonacci sequence
    const fibArr = [0,1]
    
    for (let i = 1; i<x-1; i++) {
        //9
        // 1
        const tempVal = fibArr[i] + fibArr[i-1]
        fibArr.push(tempVal)
    }
    console.log('--=-=-= fib ARR -=-=-', fibArr)
    console.log('--=-=-= fib -=-=-', fibArr[x-1])
}

fibo(1)