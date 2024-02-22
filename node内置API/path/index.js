const path = require('path');

/**
 * path.join方法 
 * 进行地址片段的拼接 
 * ../表示跳出上一层 ./无特殊效果
 */ 
let newPath = path.join('/1','1/12312','./2/','../3/')
console.log(newPath);
// 结合__dirname使用
newPath = path.join(__dirname,'../files/1.html')
console.log(newPath);

/**
 * path.basename方法 
 * 获取地址的最后部分 
 * 参数1 地址字符串
 * 参数2 扩展名 可选 写了则返回去掉了指定扩展名后的字符串 非法则无效
 */ 
let lastPart = path.basename(path.join(__dirname,'./files/1.html'))
lastPart = path.basename(path.join(__dirname,'./files/1.html'),'.html')
console.log(lastPart);

/**
 * path.extname方法
 * 获取地址的扩展名部分 无则返回空
 */
let extPart = path.extname(path.join(__dirname,'../files/1.html'))
console.log(extPart);