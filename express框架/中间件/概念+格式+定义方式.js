// 中间件 特指业务流程的中间处理环节
// 当一个请求到达express服务器后，可连续调用多个中间件，进行预处理
// 中间件本质上就是个function处理函数，格式如下

const express = require('express');
const app = express();


app.get('/', function (req, res, next) { 
             // 中间件函数
    next();
    // next函数是实现多个中间件连续调用的关键，
    //  它的调用表示把流转关系转交给下一个中间件或路由
})
/**
 * 注：中间件函数和路由处理函数很像，
 * 不同的是，中间件函数的形参列表中，必须包含next参数，
 * 而路由处理函数中只包含req和res
 *  */ 


// 定义一个最简单的中间件函数
// mw middleware的缩写 定义一个最简单的中间件函数
const mw = function (req, res, next) { 
    // 把流转关系，转交给下一个中间件或路由
    next()
}

app.listen(3000)
