// express.static  快速托管静态资源
// express.json   解析json格式的请求体数据
// express.urlencoded    解析URL-encoded格式的请求体数据

const express = require('express')
const app = express()
const port = 80

// 除了错误级别中间件,其他中间件必须写在所有路由之前
// 解析json格式的请求体数据
app.use(express.json())
// 解析urlencoded格式的请求体数据
app.use(express.urlencoded({extended: false}))

app.post('/user', function (req, res) {
  // 使用req.body接收客户端发送过来的json格式或urlencoded格式的请求体数据
  // 默认情况下,如果不配置解析表单数据的中间件,req.body默认等于undefined

  console.log(req.body);
  res.send('POST request to the userpage')
})

app.post('/book', function (req, res) {
  // 默认情况下,如果不配置解析urlencoded的中间件,urlencoded格式的req.body默认等于{}
  console.log(req.body)
  res.send('POST request to the bookpage')
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))