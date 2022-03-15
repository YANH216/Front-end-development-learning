const http = require('http');

const server = http.createServer()
// req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    // req.url 是客户端请求的url地址
    const url = req.url
    // req.method是客户端请求的method类型
    const method = req.method

    const str = `请求的地址是 ${url}, and requeset method is ${method}`

    console.log(str);
    // 为了防止中文显示乱码的问题，需要设置响应头
    res.setHeader('Content-type', 'text/html; charset=utf-8')

    // 调用res.end() 方法，向客户端响应一些内容,并结束这次请求
    res.end(str)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1:80');
})