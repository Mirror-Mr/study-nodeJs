const express = require('express')

// 使用express()方法创建服务器实例 命名为app
const app = express()

/**
 * express中 路由指的是客户端的请求和服务器处理函数之间的映射关系
 * express中的路由三部分组成：
 *  请求的类型、请求的url地址、处理函数
 *  app.METHOD(PATH, HANDLER)
 */

// 挂载路由 实际开发中不要像这样 将路由直接挂载到app上 而是推荐将路由抽离为单独的模块
app.get('/',(req, res) => {
  console.log('hei~')
  res.send('哈喽~')
})

app.post('/',(req, res) => {
  console.log('is me~')
  res.send('is me~')
})


// 启动指定端口的服务器
app.listen('80',()=>{
  console.log('http://127.0.0.1:80 open了')
})