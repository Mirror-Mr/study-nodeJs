/**
 * 中间件可分为5大类，如下
 */

const express = require("express");
const app = express();

/**
 * 1.应用级别的中间件
 * 通过app.user()或app.get()或app.post()绑定到app实例上的中间件，叫做应用级别的中间件
 */ 
// 应用级别的中间件（全局中间件）
app.use((req, res, next)=>{
  next();
})

const mw = function(req, res, next) {
  next();
}
// 应用级别的中间件（局部中间件）
app.get('/', mw, (req, res)=>{
  res.send('/请求')
})



/**
 * 2.路由级别的中间件
 * 绑定到express.Router()实例上的中间件，叫做路由级别的中间件
 * 它的用法和应用级别的中间件没有任何区别
 * 只是应用级别的中间件是绑定到app实例上，而路由级别的中间件是绑定到router实例上
 */
const router = express.Router();

router.use(function(req, res, next){
  console.log('路由级别的中间件');
  next()
})
app.use('/user', router)

/**
 * 3.错误级别的中间件
 * 专门用于捕获整个项目中发生的异常错误，防止项目异常崩溃
 * 格式：错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是err,req,res,next
 */
app.get('/account',function(req, res){ // 1.定义路由
  throw new Error('服务器内部发生了错误！') // 1.1 抛出一个自定义的错误
  res.send('/请求');
})

/**
 * 注意！ 错误级别中间件的定义要放在所有的路由定义之后才会生效
 * 除了错误级别的中间件，其他中间件，必须在路由之前进行配置才会生效
 */ 
app.use(function(err, req, res, next){ // 2.错误级别的中间件
  console.log('发生了错误：' + err.message); // 2.1 在服务器打印错误信息
  res.send('Error!' + err.message) // 2.2 向客户端响应错误相关的内容
})

/**
 * 4.express内置的中间件
 * express 4.16.0版本开始，express内置了3个的常用的中间件，极大的提高了express项目的开发效率和体验
 */
// 1) express.static 快速托管静态资源的内置中间件，如HTML文件、图片、css样式等（无兼容性
// 2) express.json 解析来自客户端的JSON格式的请求体数据（有兼容性，仅在4.16.0+可用
// 3) express.urlencoded 解析来自客户端的URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+可用

// express.static('指定静态资源存放的根目录') 对外提供静态资源
console.log(__dirname);
app.use(express.static(__dirname))
// 配置解析application/json 格式数据的内置中间件
// app.use(express.json())
// 配置解析application/x-www-form-urlencoded 格式数据的内置中间件
// app.use(express.urlencoded({ extended: false }))  // 固定写法

app.post('/dinner',(req, res)=>{
  // 在服务器，可以使用req.body 这个属性来接收客户端传来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，req.body默认为undefined
  console.log(req.body)
  res.send('/dinner请求')
})
/**
 * 5.第三方中间件
 * 非express官方内置，由第三方开发出来的中间件
 * 在实际开发中，可按需下载并配置第三方中间件，提升开发效率
 * 例如body-parser，用于解析请求体数据
 */
// 1. npm install body-parser 安装该第三方中间件
// 2. require导入
const parser = require('body-parser')
// 3. app.use()注册并使用
app.use(parser.urlencoded({ extended: false}))
// app.use(express.urlencoded({ extended: false}))
// 注意，express内置的express.urlencoded中间件，就是基于body-parser这个第三方中间件进一步封装出来的



app.listen(80,()=>{
  console.log('http://127.0.0.1:80');
})