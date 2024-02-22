const fs = require('fs');

// 读取原文件
fs.readFile('./成绩.txt','utf8',(err,data)=>{
  if(err) return console.error('文件读取失败',err);
  console.log(data);
  // 对原文件进行处理
  let oldArr = data.split(' ');
  let newArr = oldArr.map(item => {
    return item.replace('=','：')
  });
  let newStr = newArr.join('\r\n')
  fs.writeFile('./整理后成绩.txt',newStr,(err)=>{
    if(err) return console.error('文件写入失败',err);
  });
  console.log('文件写入成功')
})