var fs = require('fs');

const n = 27
const a = 10
const b = 3
let sumArr =[a,b]
for (let i = 2; i<n; i++) {
    let newSumArr = []
    sumArr.map(val=>{
        let aVal = val+a
        let bVal = val+b
        if (!newSumArr.includes(aVal)) newSumArr.push(aVal)
        if (!newSumArr.includes(bVal)) newSumArr.push(bVal)
    })
    sumArr = newSumArr
}

const finalArr = sumArr.filter((v,i) => sumArr.indexOf(v) === i)

// SORT BY INTEGER
return finalArr.sort((a,b) => {return a-b})

// WRITE TO FILE USING NODE FS 
// fs.appendFile('mynewfile1.txt', finalArr, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// console.log(sumArr)
// n, a, b
/*
27
10
3

*/
// Add a and b to the previous stone numerals
/*
0 - 1 - 2 - 3 -4

    2, 3
    4, 5, 6
    6, 7, 8, 9
    8, 9, 10, 11, 12

*/

/*
0 - 1 - 2 - 3 -4
    3, 1
    6, 4, 

*/