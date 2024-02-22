const fs = require('fs');

const path = require('path');

const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
    let fPath = ``;
    if (req.url === '/') {
        fPath = path.join(__dirname, '/clock/index.html')
    } else { 
        fPath = path.join(__dirname,`/clock${req.url}`)
    }
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    fs.readFile(fPath, (err, data) => {
        if (err) return console.error('文件读取失败',err)
        res.end(data)
    })
    // res.end('请求的url路径为' + fPath)
})

server.listen('80', (err) => {
    console.log('开启80端口号~')
})