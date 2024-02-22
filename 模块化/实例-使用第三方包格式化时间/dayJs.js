/**
 * 引入第三方模块dayjs
 * 安装 npm i dayjs
 */
const dayjs = require('dayjs')

// 获得当前时间
const dt = dayjs()
console.log(dt)
// 格式化
let newDt = dt.format()
console.log(newDt);
newDt = dt.format('YYYY-MM-DD hh:mm:ss')
console.log(newDt);


