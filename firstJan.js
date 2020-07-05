let firstJan = ''
const start = 2014
const end = 2050
for (let year=start+1; year<2050; year++) {
    const january = `01-01-${year}`
    const janDate = (new Date(january)).getDay()
    if (janDate === 0) {
        console.log('====firstJanuary======')
        firstJan = january
        break
    }

    // console.log(janDate.getDay())
    // console.log(year)
}
    console.log('====firstJanuary======', firstJan)
// [0,1,2,3,4,5,6]
// 0 = sunday
