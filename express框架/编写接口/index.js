const express = require('express');
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 如果已配置CORS跨域资源共享，为防止冲突
// 必须在配置CORS中间件之前声明JSONP的接口
// 否则JSONP接口会被处理成开启了CORS的接口
app.get('/api/jsonp', (req, res) => {
    // 实现 JSONP 接口的步骤
    // 1.通过req.query 属性来接收 客户端通过get请求传递的字符串参数callback（回调函数的名字） 
    const funcName = req.query.callback;
    // 2.定义要通过 JSONP 形式发送给客户端的数据
    const data = { name: '我爱魈宝', love: 'me' }
    // 3.根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
    res.send(scriptStr);
})

// 一定要在路由之前，配置cors这个中间件，来解决接口跨域的问题
// 后续定义的所有接口，都会被处理为 CORS 接口
const cors = require('cors');
app.use(cors()) // 看清楚是带()括号的

// 导入自定义路由模块
const apiRouter = require('./apiRouter');
// 注册路由模块，并添加统一的路由前缀
app.use('/api', apiRouter);

app.listen(80, () => {
    console.log('开启127.0.0.1:80~')
})
