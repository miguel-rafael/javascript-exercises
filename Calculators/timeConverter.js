const s = '12:05:45PM'

const timeArr = s.split(':')
console.log(timeArr)
let hour = timeArr[0]
let minute = timeArr[1]
let second = timeArr [2].slice(0,2)
let amPM = timeArr[2].slice(2,4)

if (amPM === 'PM' && hour !== '12') {
    hour = parseInt(hour) + 12
    if (hour > 24) {
        hour = hour - 24
    }

} else if (amPM === 'AM') {
    if (hour === '12') {
        hour = '00'
    }
}

console.log(`${hour}:${minute}:${second}`)