const express = require('express');

const app = express();
/**
 * 模块化路由 不会将路由直接挂载在app上 而是将路由模块挂载在app上
 */
// 导入路由模块
const userRouter = require('./userRouter')

// 注册路由模块
// app.use(userRouter)
// 注册路由模块 并添加统一的访问前缀
app.use('/user',userRouter)

// 注意 app.use()方法用于注册全局中间件

app.listen('80',()=>{
  console.log('127.0.0.1:80 open~')
})