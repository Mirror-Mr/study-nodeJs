// 引入自定义模块格式化当前时间
const { parseTime } = require('./a')

const newDate = parseTime(new Date())

console.log(newDate);