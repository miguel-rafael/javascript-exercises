// Complete the staircase function below.
function staircase(n) {
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .
// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
let pyramid = ''
for (let x = 1; x <= n; x++){
    let pyramid = ''
    for (let s = 0; s < n-x; s++) {
            pyramid = pyramid + ' '
        }
    for (let z = 0; z < x; z++){
        pyramid = pyramid + '#'
    }
    console.log(pyramid)
}

}