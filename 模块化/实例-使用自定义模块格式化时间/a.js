/**
 * 自定义格式化时间的模块
 */
const parseTime = function (date) {
    const dt = new Date(date);

    const Y = dt.getFullYear();
    const M = ( dt.getMonth() + '' ).padStart(2, '0');
    const D = ( dt.getDate() + '' ).padStart(2, '0');

    const hh = dt.getHours(); 
    const mm = dt.getMinutes();
    const ss = dt.getSeconds();

    const newDate = `${Y}/${M}/${D} ${hh}:${mm}:${ss}`
    
    return newDate

}
module.exports = {
    parseTime
}
