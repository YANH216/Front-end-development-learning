const fs = require('fs');
//  __dirname 表示当前终端所处路径
fs.readFile(__dirname + '\\成绩.txt', (err, data) => {
    if (err) {
        return console.log('读取文件失败');
    }

    // console.log('读取文件成功' + data);
    // 不能直接对data进行字符串操作，此时data类型为Buffer，需要先将其转换成字符串类型
    const newData = data.toString()
    // 将newData根据空格分隔成数组
    const arr = newData.split(' ')
    // 定义接收生成的新数组
    const newArr = []
    arr.forEach((item) => {
        newArr.push(item.replace('=', ':'))
    })
    const newStr = newArr.join('\r\n')

    // 处理后的数据写入新文件中
    fs.writeFile(__dirname + '\\成绩-ok.txt', newStr, (err) => {
        if (err) {
            return console.log('文件写入失败');
        }
    })
    fs.readFile(__dirname + '\\成绩-ok.txt', (err, data) => {
        if (err) {
            return console.log('成绩-ok文件读取失败');
        }
        console.log('成绩-ok\r\n' + data);
    })
})