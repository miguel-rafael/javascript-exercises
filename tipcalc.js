// readline - for console input
/*
Bills: 124, 48, 268
tip a fair amount using function - 
tip 20% of the bill if less than 50
tip 15% of the bill if between 50-200
tip 10% of the bill if more than 200

2 arrays - tips, final paid amountc (tip + bill)
*/

function tipCalc (bills) {
    const tipArr = bills.map(bill => tipRange(bill))
    const totalBill = tipArr.map((tip, i) => tip + bills[i])
    console.log('Tip Array', tipArr)
    console.log('Total Bill: ', totalBill)
}

function tipRange (value) {
    switch (true) {
        case value < 50:
            return value * 0.2
        case value >= 50 && value <=200:
            return value * 0.15
        case value > 200:
            return value *0.1
        default:
            return 0
    }
}
tipCalc([124,48,268])

// const billArr = []
// let x = 0
// while (x<3) {
//     r1.question('?', (answer) => {
//         billArr.push(answer)
//         r1.close()
//     })
//     console.log(billArr)
//     x++
// }