
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
 * @name 今年
 * @returns {Array} []
 */
function getThisYear(pattern) {
    const NOW = new Date(),
        Y = NOW.getFullYear()
    let result = []
    for (let i = 1; i <= 12; i++) {
        let date = Y + '-' + i
        result.push({
            month: parseDate(date, pattern)
        })
    }
    return result
}