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
 * @name 近一年
 * @param {String} pattern  'yyyy-MM-dd'
 */
function getLastYear(pattern) {
    const NOW = new Date()
    let result = [],
        month = NOW.getMonth() + 2,
        year = NOW.getFullYear() - 1 // 去年开始
    while (result.length < 12) {
        let m = month % 12
        if (m === 0) m = 12
        if (m === 1) year++
        let date = year + '-' + m
        result.push(parseDate(date, pattern))
        month++
    }
    return result
}

console.log(getLastYear('yyyy/MM'));