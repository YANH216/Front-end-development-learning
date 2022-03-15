const express = require('express')
const app = express()
const port = 80

// 配置session中间件
const session = require('express-session');
app.use(session({
  secret: 'yh',
  resave: false,
  saveUninitialized: true,
}))

// 托管静态界面
app.use(express.static('./pages'))
// 解析post提交的表单数据
app.use(express.urlencoded({ extended: false }))

// 只有配置了express-session中间件之后,req上才有session属性
// 登录接口
app.post('/api/login', function (req, res) {
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  req.session.userInfo = req.body
  req.session.isLogin = true

  res.send({ status: 0, msg: '登录成功' })

})

// 获取session中的属性
app.get('/api/username', (req, res) => {
  if (req.session.isLogin !== true) {
    return res.send({ status: 1, msg: 'fail' })
  }

  res.send({
    status: 0,
    msg: 'success',
    username: req.session.userInfo.username,
  })
})

// 清空session
app.post('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功',
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))