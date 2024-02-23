const express = require('express')
const app = express();

// 导入封装的中间件模块
const customBodyParser = require('./custom-body-parser')

// 注册自定义的解析表单数据的全局中间件
app.use(customBodyParser)

app.get('/',(req, res)=>{
  res.send(req.body)
})

app.listen(80,()=>{
  console.log('开启http://127.0.0.1:80~');
})