const fs = require('fs');

/**
 * 读取文件
 * 参数1 文件路径 必填 相对路径是相对于使用node指令的那层目录 建议写全路径 可使用__dirname表示当前文件所在目录
 * 参数2 编码格式 可选 
 * 参数3 回调函数 必填 err错误 dataStr读取的字符串
 */ 
fs.readFile("./1.txt","utf8",(err,dataStr)=>{
  if(err){
    return console.error('读取失败\r\n',err);
  }
  console.log('读取成功\r\n', dataStr);
})

/**
 * 写入文件
 * 参数1 文件路径 必填 相对路径是相对于使用node指令的那层目录 建议写全路径 可使用__dirname表示当前文件所在目录
 * 参数2 要写入的文件内容
 * 参数3 编码格式 可选 默认utf8
 * 参数4 回调函数 err错误
 * writrFile方法只能用来创建文件 不能用来创建路径 如果指定不存在的路径则报错 
 * 多次写入同一文件 后一次会覆盖前一次
 */
// fs.writeFile("./2.txt","lalalalalalalalalalalalalalalalalal","utf8",(err)=>{
//   if(err){
//     return console.error('写入失败\n',err)
//   }
//   console.log('写入成功\n',err)
// })