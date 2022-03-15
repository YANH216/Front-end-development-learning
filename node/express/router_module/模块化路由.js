const express = require('express');
const useRouter = require('./router/router');

const app = express()

app.listen(80, () => {
    console.log('Server running at 127.0.0.1');
})

app.use(useRouter)

// 为路由模块添加前缀
// app.use('api', useRouter)