/**
 * 引入第三方模块moment
 * 安装 npm i moment
 */
const moment = require('moment')

// 获得当前时间
const dt = moment()
console.log(dt)
// 格式化
let newDt = dt.format()
console.log(newDt);
newDt = dt.format('YYYY-MM-DD hh:mm:ss')
console.log(newDt);
