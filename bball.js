// JOhn's team 89,120,103
// Mike's team 116, 94, 123

// Calculate the average score of each team
// Decide which team wins in average, and print the winner in the console. Include the avg score in the console
//Change the scores to show different winners

const johnScore = [89, 120, 103]
const mikeScore = [116, 94, 100]
const maryScore = [116, 94, 200]
const johnAvg = johnScore.reduce((total, curScore) => (total + curScore) / johnScore.length ).toPrecision(2)
const mikeAvg = mikeScore.reduce((total, curScore) => (total + curScore) / mikeScore.length ).toPrecision(2)
const maryAvg = maryScore.reduce((total, curScore) => (total + curScore) / maryScore.length ).toPrecision(2)

let winner
let score
switch (true) {
    case johnAvg > mikeAvg && johnAvg > maryAvg:
        winner = 'John'
        score = johnAvg
        break;
    case mikeAvg > johnAvg && mikeAvg > maryAvg:
        winner = 'Mike'
        score = mikeAvg
        break;
    case maryAvg > johnAvg && maryAvg >mikeAvg:
        winner = 'Mary'
        score = maryAvg
        break;
    default:
        winner = ''
        break;
}

console.log(`The winner is ${winner} With a score of ${score}`)