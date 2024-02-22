const express = require('express');
const app = express()


// 什么是全局生效的中间件，客户端发起的任何请求，到达服务器后，都会触发的中间件，就叫做全局生效的中间件
// 通过调用app.use(中间件函数)，即可顶一个全局生效的中间件，实例如下

const mw = function (req, res, next) { 
    console.log('这是一个全局生效的中间件函数');
    next()
}
// 注册一个全局生效的中间件
app.use(mw);

// 简化
// app.use(function (req, res, next) { 
//     console.log('这是一个全局生效的中间件函数');
//     next()
// })

// 可使用app.use()连续定义多个全局中间件，客户端请求到达服务器之后，会按照中间件定义的陷后顺序依次进行调用
app.use(function (req, res, next) { 
    console.log('这是第二个全局中间件哦~');
    next();
})

app.get('/', (req, res) => {
    // 没有next参数，是路由处理函数
    console.log('/请求的路由处理函数');
    res.send('/')
})
app.get('/user', (req, res) => {
    console.log('/user请求的路由处理函数');
    res.send('/user')
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})