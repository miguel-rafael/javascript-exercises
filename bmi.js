let massMark, massJohn, heightMark, heightJohn
massMark = 80
massJohn = 75
heightJohn = 1.9
heightMark = 1.75

let bmiMark = massMark / (heightMark*heightMark)
let bmiJohn = massJohn / (heightJohn*heightJohn)


let isHigher = bmiMark > bmiJohn

console.log(`Is Mark's BMI higher than John's? ${isHigher}. \nMark BMI: ${bmiMark.toPrecision(4)}. \nJohn BMI: ${bmiJohn.toPrecision(4)}. `)