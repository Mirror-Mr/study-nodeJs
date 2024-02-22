// 1.安装
// npm i express@4.17.1

// 2.导入
const express = require('express');

// 3.调用方法 创建服务器实例
const app = express();

// 5.监听客户端的GET和POST请求并响应 请求的url地址记得带/
app.get('/user', (req, res) =>{
    // 调用express提供的res.send()方法 向客户端响应一个JSON对象
    res.send({name:'万叶',like:'me!'})
})

app.post('/user', (req, res) => {
    // 调用express提供的res.send()方法 向客户端响应一个文本字符串
    res.send('万叶小可爱！')
})

// 6.通过req.query可以获取到客户端发送来的 查询参数 如：http://127.0.0.1:80/?name=万叶
// 注意 默认情况下 req.query是一个空对象
app.get('/', (req, res) => {
    // { "name":"万叶" }
    res.send(req.query)
})

// 7.通过req.params可以获取到客户端发送来的 动态参数 如：http://127.0.0.1:80/content/1
// 注意 默认情况下 req.params是一个空对象
app.get('/content/:page', (req, res) => {
    // { "page":"1" }
    res.send(req.params)
})
// ':'是固定写法，用于匹配动态参数  ':'后的参数名称可自定义
app.get('/content/:page/:id', (req, res) => {
    // { "page":"1", "id":"2" }
    res.send(req.params)
})

// 4.listen方法启动指定端口的服务器
app.listen('80', () => {
    console.log('express server running at http://127.0.0.1:80')
})