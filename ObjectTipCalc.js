// 124, 48, 268, 180, 42
// 20% < 50,  50< 15% >200, 10%>200
// Objects and loops
/*
    Object with array of bills,
    Object Method to calc tip
    looping to 
    output: array all tips and array final paid
*/

let johnObj = {
    bills: [1241,48,268,180,42],
    calcTips: function() {
        let tipsArr = []
        let finalBill = []
        this.bills.map(bill => {
            if (bill < 50) {
                tipsArr.push(bill*.2)
                finalBill.push((bill*.2) + bill)
            } else if (50<= bill <= 200) {
                tipsArr.push(bill*.15)
                finalBill.push((bill*.15) + bill)
            } else if (bill > 200) {
                tipsArr.push(bill*.1)
                finalBill.push((bill*.1) + bill)
            }
        })
        this.tips = tipsArr
        this.finalBill = finalBill
        return this.tips
    },
    tips: [],
    finalBill: []
}

let mikeObj = {
    bills: [77,375,110,45],
    calcTips: function() {
        let tipsArr = []
        let finalBill = []
        this.bills.map(bill => {
            if (bill < 100) {
                tipsArr.push(bill*.2)
                finalBill.push((bill*.2) + bill)
            } else if (100<= bill <= 300) {
                tipsArr.push(bill*.15)
                finalBill.push((bill*.15) + bill)
            } else if (bill > 300) {
                tipsArr.push(bill*.1)
                finalBill.push((bill*.1) + bill)
            }
        })
        this.tips = tipsArr
        this.finalBill = finalBill
        return this.tips
    },
    tips: [],
    finalBill: []
}

function calcAvg(tips) {
    const avg = (tips.reduce((z,x) => z+x)) / tips.length
    return avg
}
const johnAvg = calcAvg(johnObj.calcTips())
const mikeAvg = calcAvg(mikeObj.calcTips())

console.log(johnAvg)
console.log(mikeAvg)
const higher = johnAvg > mikeAvg ? "John's family has higher tips" : "Mike's family has higher tips"
console.log(higher)