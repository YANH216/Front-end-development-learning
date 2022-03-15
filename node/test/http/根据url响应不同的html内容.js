const http = require('http');

const server = http.createServer()
// 获取请求的url地址
server.on('request', ({ url }, res) => {
    
    let content = '404 NOT FOUND'
    // 判断用户请求的是否为 / 或 /index.html 首页
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
        // 判断用户请求的是否为 /about.html 关于页面
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // 设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    // 把内容响应给客户端
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})