const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {

	throw new Error('服务器内部发生错误')

  res.send('GET request to the homepage')
})


app.get('/user', (req, res) => res.send('Hello World!'))


// 定义错误级别中间件，捕获整个项目的异常错误，从而防止服务器崩溃
// 错误级别中间件，需要放在所有路由之后
app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something broke!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))