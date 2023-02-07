/**
 * @name 天/月
 * @param {String} _date 
 * @returns {Number} day
 * @description 传入一个合法的日期，返回该日期所属月份一个多少天
 */
function daysPerMonth(_date) {
    const NOW = new Date(_date)
    if (NOW.toString() === 'Invalid Date') throw TypeError('Incorrect date format.')
    //当前月
    const NOW_M = NOW.getMonth(),
        //当前年
        NOW_Y = NOW.getFullYear(),
        //本月的开始时间
        START = new Date(NOW_Y, NOW_M),
        //下个月的开始时间
        END = new Date(NOW_Y, NOW_M + 1),
        TOTAL = Date.parse(END) - Date.parse(START),
        DAY = 24 * 60 * 60 * 1000
    return TOTAL / DAY
}

let m1 = '2020-02'  // 某一月
let m2 = '2020-04-01' // 具体某一天
let m3 = new Date() // 当前月
console.log(daysPerMonth(m1)) // 29
console.log(daysPerMonth(m2)) // 30
console.log(daysPerMonth(m3)) // 31

