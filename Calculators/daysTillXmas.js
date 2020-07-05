function whenIsChristmas(date) {
    const year = date.getFullYear()
    const xMas = new Date(`12-25-${year}`)
    if (date > xMas) return 'Day Given is after xmas :<'
    let diff = Math.abs(xMas - date)
    diff = Math.floor((((diff / 1000) / 60) / 60) / 24)
    return diff
}

const daysTill = whenIsChristmas(new Date())

console.log('days', daysTill)