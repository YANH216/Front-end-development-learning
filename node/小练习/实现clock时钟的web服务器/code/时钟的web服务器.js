const fs = require('fs');
const path = require('path');
const http = require('http');

// 创建web服务器
const server = http.createServer()
// 监听web服务器的request事件
server.on('request', ({ url }, res) => {

    // 把请求到的URL地址映射为具体文件的存放路径
    // const fPath = path.join(__dirname, url)
    let fPath = ''
    if (url === '/') {
        fPath = path.join(__dirname, '/clock/index.html')
    } else {
        fPath = path.join(__dirname, '/clock', url)
    }
    
    fs.readFile(fPath, (err, data) => {
        if (err) {
            return res.end('404 NOT FOUND')
        }
        res.end(data)
    })
})
// 启动服务器
server.listen(80, () => {
    console.log('Server running at http://127.0.0.1');
})