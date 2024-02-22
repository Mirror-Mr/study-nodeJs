/**
 * 路由模块
 */
const express = require('express');

// express.Router()方法创建路由对象实例
const router = express.Router();

// 向路由对象的实例上挂载路由
router.get('/msg', (req,res)=>{
  res.send('get /msg')
})

router.post('/like', (req,res)=>{
  res.send('post /like')
})

// 导出路由实例
module.exports = router