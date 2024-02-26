const express = require('express');
const apiRouter = express.Router();

// 挂载GET路由
apiRouter.get('/get', (req, res) => {
    // 1.通过req.query属性来接收 客户端通过get请求的传递的字符串参数 
    const query = req.query;
    // 2.res.send() 将数据响应给客户端
    res.send({
        status: 0, // 状态，0表成功，1表失败
        msg: 'GET请求成功', // 状态描述
        data: query // 相应给客户端的具体数据
    });
})
// 挂载POST路由
// 注意，如果要获取URL-encoded格式的请求体数据，必须配置中间件app.use(express.urlencoded({ extended: false }))

apiRouter.post('/post', (req, res) => {
    // 1.通过req.body属性来接收 客户端通过post请求体传递的URL-encoded参数数据
    const body = req.body;
    // 2.res.send() 将数据响应给客户端
    res.send({
        status: 0, // 状态，0表成功，1表失败
        msg: 'POST请求成功', // 状态描述
        data: body // 相应给客户端的具体数据
    });
})

module.exports = apiRouter;