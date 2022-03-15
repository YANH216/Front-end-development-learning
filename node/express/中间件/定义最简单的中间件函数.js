const express = require('express');

const app = express()

// 定义一个最简单的中间件函数
// 为req对象挂载自定义属性，从而把时间共享给后面的所有路由
const mw = (req, res, next) => {
    const time = Date.now()
    req.startTime = time
    console.log('这是最简单的中间件函数');

    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 将mw注册为全局成效的中间件
app.use(mw)

app.get('/', (req, res) => {
    res.send('Home page'+ req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page'+ req.startTime)
})


app.listen(80, () => {
    console.log('Server running at 127.0.0.1');
})