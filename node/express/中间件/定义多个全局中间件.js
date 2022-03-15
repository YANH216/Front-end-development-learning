const express = require('express');

const app = express()

// 定义第一个中间件
app.use((req, res, next) => {
    console.log('调用第一个中间件');

    next()
})

// 定义第二个中间件
app.use((req, res, next) => {
    console.log('调用第二个中间件');

    next()
})

// 定义路由
app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('Server running at 127.0.0.1');
})