const DEFAULT_FORMAT = 'yyyy-MM-dd ',
    SIGN_REGEXP = /([yMdhsm])\1*/g
function padding(string, length) {
    const LEN = length - String(string).length
    for (let i = 0; i < LEN; i++) {
        string = '0' + string
    }
    return string
}
function parseDate(date, pattern) {
    let format = pattern || DEFAULT_FORMAT;
    const DATE = new Date(date);
    return format.replace(SIGN_REGEXP, function (match) {
        switch (match.charAt(0)) {
            case 'y':
                let year = DATE.getFullYear()
                if (match.length === 4) return year
                return String(year).substring(2)
            case 'M':
                let month = DATE.getMonth() + 1
                if (match.length === 2) {
                    return padding(month, match.length)
                }
                return month
            case 'd':
                let day = DATE.getDate()
                if (match.length === 2) {
                    return padding(day, match.length)
                }
                return day
            case 'h': return padding(DATE.getHours(), match.length)
            case 'm': return padding(DATE.getMinutes(), match.length)
            case 's': return padding(DATE.getSeconds(), match.length)

            default: return ''
        }
    })
}

/**
 * @name 本周
 * @description 传入某一天时间格式的值，返回这一周的日期数组
 * @param {yyyy-MM-dd} time 
 * @returns {Array}
 */
function getThisWeek(date, pattern) {
    const NOW = new Date(date)
    if (NOW.toString() === 'Invalid Date') throw TypeError('Incorrect date format.')
    const WEEK = NOW.getDay() || 7, // 一周的第几天(1,2,3,4,5,6,0),若为0返回7
        TODAY = NOW.getDate(),    // 本月的第几天
        NOW_M = NOW.getMonth(), // 那一月 从 0（1月）到 11（12月）
        NOW_Y = NOW.getFullYear(), // 那一年
        CURRENT = Date.parse(new Date(NOW_Y, NOW_M, TODAY)), // time的毫秒数
        DAY = 24 * 60 * 60 * 1000
    let result = []
    for (let i = 1; i <= 7; i++) {
        let time = WEEK - i,
            cur = CURRENT - (time * DAY)
        result.push({
            which: i, // which day of the week
            date: parseDate(cur, pattern)
        })
    }
    return result
}

let thisWeek = getThisWeek('2020-09-11', 'yyyy-MM-dd')
console.log(thisWeek);
// > ['2020-11-02','2020-11-03','2020-11-04','2020-11-05','2020-11-06','2020-11-07','2020-11-08']