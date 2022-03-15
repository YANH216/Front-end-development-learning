const express = require('express');

const router =  express.Router()


// 这里挂载路由模块
router.get('/get', (req, res) => {
  // 通过req.query获取客户端通过查询字符串,发送到服务器的数据
  const query = req.query
  // 调用res.send方法,向客户端响应处理的结果
  res.send({
    status: 0, // 0 表示成功, 1表示失败
    msg: 'GET请求成功',  // 状态的描述
    data: query  // 响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  // 通过req.body获取请求体中包含的url-encoded格式的数据
  const body = req.body
  // 调用res.send()方法,响应给客户端结果
  res.send({
    status: 0,
    msg: 'post请求成功',
    data: body
  })


})

module.exports = router