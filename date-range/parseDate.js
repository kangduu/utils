const DEFAULT_FORMAT = 'yyyy-MM-dd ',
    SIGN_REGEXP = /([yMdhsm])\1*/g

/**
 * @description 补零
 * @param {String} string 
 * @param {Number} length 
 */
function padding(string, length) {
    const LEN = length - String(string).length
    for (let i = 0; i < LEN; i++) {
        string = '0' + string
    }
    return string
}
/**
 * @name 日期格式解析
 * @param {Date} date 
 * @param {String} pattern 
 */
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
console.log(parseDate('2020-01-01'))