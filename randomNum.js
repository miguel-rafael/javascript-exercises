function random(min, max) {
    console.log('======random====', Math.random())
    console.log('======random====', Math.random() * min)
    console.log('======random====', Math.floor(Math.random() * max  ) + min)
    return Math.floor(Math.random() * (max-min)) + min
}

const randNum = random (5, 10)
console.log(randNum)