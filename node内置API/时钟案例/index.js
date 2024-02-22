const fs = require('fs');
const path = require('path');

const regCss = /<style>[\s\S]*<\/style>/
const regJs = /<script>[\s\S]*<\/script>/

// 读取指定文件内容
fs.readFile(path.join(__dirname, './index.html'),'utf8', (err, data) => {
  if(err) {
    return console.error('读取文件出错',err);
  }
  // console.log(data);
  // 对读取到的文件内容进行处理
  resolveHtml(data)
  resolveCss(data)
  resolveJs(data)
})

// 处理html
function resolveHtml(data){
  let htmlStr = data.replace(regCss,`<link rel='stylesheet' href='./index.css'/>`).replace(regJs,`<script src='./index.js'></script>`);
  fs.writeFile(path.join(__dirname,'./clock/index.html'), htmlStr, (err) => {
    if(err) {
      return console.error('写入html文件出错',err);
    }
    // console.log(htmlStr); 
  })
}

// 处理css
function resolveCss(data){
  let cssStr = regCss.exec(data)[0];
  cssStr = cssStr.replace('<style>','').replace('</style>','');
  fs.writeFile(path.join(__dirname,'./clock/index.css'), cssStr, (err) => {
    if(err) {
      return console.error('写入css文件出错',err);
    }
    // console.log(cssStr); 
  })
}

// 处理js
function resolveJs(data){
  let jsStr = regJs.exec(data)[0];
  jsStr = jsStr.replace('<script>','').replace('</script>','');
  fs.writeFile(path.join(__dirname,'./clock/index.js'), jsStr, (err) => {
    if(err) {
      return console.error('写入js文件出错',err);
    }
    // console.log(jsStr); 
  })
}