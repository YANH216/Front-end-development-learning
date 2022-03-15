const express = require('express')
const app = express()
const port = 80

const mw1 = function (req, res, next) {
  console.log('局部中间件1')
  next()
}

const mw2 = function (req, res, next) {
  console.log('局部中间件2')
  next()
}

// 定义局部中间件  定义多个局部中间件
app.get('/', [mw1, mw2], (req, res) => {
  res.send('GET request to the homepage')
})

app.get('/user', (req, res) => {
  res.send('GET request to the userpage')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))