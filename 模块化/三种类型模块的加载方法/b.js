/**
 * 使用require加载模块
 * 加载模块时 被加载的模块内的代码会执行
 */
const a = require('./a.js'); // 使用require加载模块时 .js后缀名可省略
console.log(a);
// 输出 这是用户自定义的模块a \r\n {}
/**
 * 输出的{} 是加载模块中的module.exports属性所指向的对象
 * module.exports属性默认是{}
 */