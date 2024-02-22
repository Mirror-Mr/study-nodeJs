/**
 * 模块的三种类型：内置、自定义、第三方
 * 用户的每一个js文件都可以看作是一个用户自定义的模块
 */
console.log('这是用户自定义的模块a'); //被加载时 这句输入会执行

/**
 * 每个自定义模块都会有个module.exports属性 
 * 当外界加载模块时，得到的就是这个module.exports所指向的对象
 * module.exports默认值为{}
 */

const username = "小雷";

module.exports.username = username;

module.exports.sayHello = function () {
    console.log('hello,我是', username);
}
/**
 * 改变了module.exports指向的存储地址
 * 值被替换为一个全新的对象
 */
module.exports = {
    nickname: "小小雷",
    age:12
}
/**
 * 由于module.exports写法复杂 为了简化 node提供了exports对象
 * exports是和module.exports都是引用 默认情况下 exports和module.exports指向的是同一个对象
 * 直接给exports赋一个新的对象时，会改变exports指向的对象，导致exports和module.exports不再指向同一对象
 */
exports = {
    isWink: "yeah",
}
exports.weather = "好天气"
console.log(module.exports, exports);

// 但require最终对外导出始终是module.exports指向的对象