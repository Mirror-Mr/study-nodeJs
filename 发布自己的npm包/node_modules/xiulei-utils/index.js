// 包的入口文件

// 处理日期类模块
const date = require("./src/modules/dateFormat")
// 处理转义类模块
const escape = require("./src/modules/htmlEscape")


// 向外暴露包中定义的对象方法
module.exports = {
  ...date,
  ...escape
}