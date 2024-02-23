/**
 * 在实际开发中，多个中间件之间共享同一份req和res
 * 基于这一特性，可在上游的中间件中，统一为req或res对象添加自定义的属性或方法，
 *  供下游的中间件或路由进行使用
 *  */ 
const express = require('express');
const app = express()

// 实例，需要所有请求输出发送请求的时间
app.use(function (req, res, next) { 
    // 获取请求到达服务器的时间
    const time = Date.now();
    // 为req对象，挂载自定义属性，把时间共享给后面的路由
    req.startTime = time;
    next()
})

app.get('/', (req, res) => {
    res.send('/请求，' + req.startTime)
})
app.get('/user', (req, res) => {
    res.send('/user请求，' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})

/**
 * 注意点:
 * 1.一定要在路由之前注册中间件
 * 2.客户端发送过来的请求，可以连续调用多个中间件进行处理
 * 3.执行完中间件的业务代码之后，不要忘记调用next()函数
 * 4.为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
 * 5.连续调用多个中间件时，多个中间件之间，共享req和res对象
 */