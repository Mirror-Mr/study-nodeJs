const express = require('express');
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，配置cors这个中间件，来解决接口跨域的问题
const cors = require('cors');
app.use(cors()) // 看清楚是带()括号的

// 导入自定义路由模块
const apiRouter = require('./apiRouter');
// 注册路由模块，并添加统一的路由前缀
app.use('/api', apiRouter);

app.listen(80, () => {
    console.log('开启127.0.0.1:80~')
})
