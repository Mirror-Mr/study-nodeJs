const express = require('express')
const app = express();

// 导入内置的querystring模块
const qs = require('querystring');

// 1.解析表单数据的全局中间件
app.use((req, res, next) => {
  // 定义一个str字符串，用于存储客户端发来的请求体数据
  let str = ''
  // 2.监听req的data事件 获取客户端发送到服务器的数据
  req.on('data',(frag)=>{
    // 如果数据量比较大，无法一次性发送完毕，客户端会把数据切割后，分批发送到服务器，
    // 所以data事件可能会触发多次，每次触发data事件时，获取到的数据只是完整数据的一部分，
    // 需要手动对接收到的数据进行拼接
    str += frag;
  })
  // 3. 监听req的end事件 当请求体数据接收完毕后，会自动触发req的end事件
  req.on('end',()=>{
    // 可在req的end事件中，拿到并处理完整的请求体数据
    console.log(str);
    // 把字符串格式的请求体数据，解析成对象格式

    // nodejs内置了一个querystring模块，专门用来查询字符串，该模块的parse()方法，可将查询字符串，解析为对象的格式
    const body = qs.parse(str)
    console.log(body);
    // 上游的中间件和下游的中间件及路由之间，共享同一份req和res，可将解析出来的数据，挂载为req的自定义属性，命名为req.body
    req.body = body;
    next(); // 一定要记得next
  })
})

app.get('/',(req, res)=>{
  res.send(req.body)
})

app.listen(80,()=>{
  console.log('开启http://127.0.0.1:80~');
})