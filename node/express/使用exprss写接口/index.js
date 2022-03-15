const express = require('express')
const app = express()
const port = 80

// 导入路由模块
const apiRouter = require('./apiRouter')

app.use(express.urlencoded({ extended: false }))

// 必须在cors之前配置jsonp接口,否则jsonp接口会被作为cors接口,从而起不到jsonp接口的作用  jsonp只支持get请求
app.get('/api/jsonp', (req, res) => {
  // 定义jsonp接口具体的实现过程

  // 得到函数的名称
  const funcName = req.query.callback
  // 定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 20 }
  // 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 把拼接的字符串,响应给客户端
  res.send(scriptStr)
})


// 导入cors中间件解决跨域问题
const cors = require('cors');

app.use(cors())

// 把路由模块注册到app上
app.use('/api', apiRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))