const http = require('http');

// 创建一个服务器的实例
let server = http.createServer()

/**
 * 监听客户端发来的请求
 * req 请求对象
 * res 响应对象
 */ 
server.on("request", (req, res) => {
  console.log(`接收到请求了，url是${req.url}，类型是${req.method}`);
  // 直接end中文，会出现中文乱码问题，需在响应头中添加Content-Type属性，设值为text/html;charset=utf-8
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end('你说啥呢')
})
// 开启指定端口
server.listen('80',()=>{
  console.log('开启80端口');
})

