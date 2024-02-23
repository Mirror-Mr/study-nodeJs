/**
 * 不使用app.use()定义的中间件，叫做局部生效的中间件
 */

const express = require('express')
const app = express()
// 定义中间件函数mw
const mw = function(req, res, next) {
  console.log('这是中间件函数');
  next();
}

// mw中间件只在当前路由中生效，这种用法属于'局部生效的中间件'
app.get('/', mw, function(req, res){
  res.send('加了局部中间件的/请求');
})

// mw中间件不会影响到未添加mw中间件的路由
app.get('/user', function(req, res){
  res.send('/user请求');
})

// 定义第二个中间件函数mw1
const mw1 = function(req, res, next) {
  console.log('这是中间件函数1');
  next();
}

// 同时使用多个局部中间件函数，有两种方式，用哪个都行
// 多个传参形式
// app.get('/account',mw, mw1, function(req, res){
//   res.send('添加了多个局部中间件的/account请求')
// })
// 数组传参形式
app.get('/account', [mw, mw1], function(req, res){
  res.send('添加了多个局部中间件的/account请求')
})
app.listen(80,()=>{
  console.log('开启http://127.0.0.1:80~')
})