// 测试包提供的方法是否生效
// let { dateFormat,htmlEscape,htmlUnEscape } = require("./xiulei-utils/index");
// 引入自己的三方包
let { dateFormat,htmlEscape,htmlUnEscape } = require("xiulei-utils");


console.log(dateFormat(new Date()));
console.log(dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss'));
console.log(htmlEscape(`<p>你好，"&"</p>`));
console.log(htmlUnEscape("&lt;p&gt;你好，&amp;&&lt;/p&gt;"));