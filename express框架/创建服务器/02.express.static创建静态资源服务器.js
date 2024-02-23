const express = require("express");

const app = express();

// express.static('指定静态资源存放的根目录 相对路径(也可是绝对路径)') 对外提供静态资源
app.use(express.static('./clock'))
// 存放静态资源的目录名默认不会出现在url中
// 可通过 http://127.0.0.1/index.html 访问clock目录下的index.html文件

/**
 * 如果要托管多个存放静态资源的目录 就多调几次app.use(express.static(/.../))
 * 如果不同目录下出现了同名文件，则按托管的先后顺序加载
 */
app.use(express.static('./files'))

/**
 * 如果希望访问资源时根据目录的不同路径有所区分，则可以使用app.use方法的另一个参数，定义路径前缀
 */
app.use('/clock', express.static('./clock'))
// 可通过 http://127.0.0.1/clock/index.html 访问clock目录下的index.html文件

app.listen('80', () => {
    console.log("启动80端口服务器-127.0.0.1:80")
})