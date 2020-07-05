// var firstName = 'John'
// var lastName = 'Smith'
// var age = 28
// var fullAge = true
// var job
// console.log(`${firstName} ${lastName} is ${age} years old. ${fullAge} ${job} ${job2}`)


// Variable Mutation and Type Coercion

let firstName = 'John'
let age = 28

// JS Type Coercion - JS automatically converts data types as needeed (Number -> String)
console.log(firstName + ' ' + age)


let job, isMarried
job = 'Teacher'
isMarried = false


// Variable Mutation
age = 'twenty eight'
job = 'driver'
console.log(age, isMarried, job)

age = prompt('What is the age of John?')

alert(`John's Age is ${age}`)