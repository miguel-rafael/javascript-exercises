const readline = require('readline')

function numberGuesser (num) {
    const number = Math.floor(Math.random() * 10) + 1 // randomizer daw
    if (number === num) console.log('Congrats')
    else console.log('Sorry try again')
}

let z = readline()
