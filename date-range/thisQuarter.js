/**
 * @name 本季度
 * @returns {Array} []
 */
function getThisQuater() {
    const NOW = new Date(),
        M = NOW.getMonth()
    let quaterMap = new Map()
        .set(0, '第一季度')
        .set(1, '第二季度')
        .set(2, '第三季度')
        .set(3, '第四季度')
    return quaterMap.get(Math.floor(M / 3))
}
console.log(getThisQuater());