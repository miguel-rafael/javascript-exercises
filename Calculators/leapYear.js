/*
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
*/


function isLeapYear(year=0) {
    if (year % 4 !== 0) console.log('not')
    else if (year % 100 !== 0) console.log('leap')
    else if (year % 400 !== 0) console.log('not')
    else console.log('leap')
    console.log(year % 4)
    console.log(year % 100)
    console.log(year % 400)
}

console.log()
isLeapYear(2020)


