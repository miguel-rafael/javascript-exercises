function diagonalDifference(arr) {
    // Write your code here
    let leftDiag = 0, rightDiag = 0
    // arr[0] arr[1] arr[2]
    for (let i = 0; i<arr.length; i++) {
        leftDiag += arr[i][i]
        rightDiag += arr[i][arr.length - i - 1]
    }
    return Math.abs(leftDiag - rightDiag)
    // return rightDiag
}
