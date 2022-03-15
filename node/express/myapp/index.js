// 导入express
const express = require('express');

// 创建web服务器
const app = express()

// 将public作为对外提供的静态资源
// 提供的路径不会出现在访问路径中
// 需要提供多个静态资源，只需要多次调用express.static()
// 在查找静态资源时，按照调用的先后顺序进行查找，找到之后停止查找
app.use(express.static('./public'))  
// 两个文件中都含有index.html，只查找先调用的，找到就返回，找不到就继续往下查找
app.use(express.static('./file'))

// 挂载路径前缀 只需在前面添加路径字符串
// app.use('/abc', express.static('./file'))



// 调用listen 启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})

// 监听get请求  
app.get('/user', (req, res) => {
    res.send({
        name: 'as',
        age: 20
    })
})

// 监听post请求
app.post('/user', (req, res) => {
    // 可以响应文本或json
    res.send('请求成功')
})

// req.query 获取用户通过url传递的参数 默认空对象
app.get('/', (req, res) => {
    console.log(req.query);

    res.send(req.query)
})

// req.params 动态匹配到的URL参数，默认空对象
app.get('/user/:id', (req, res) => {
    console.log(req.params);

    res.send(req.params)
})
