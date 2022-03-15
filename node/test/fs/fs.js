const fs = require('fs');
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('文件读取失败' + err.message);
    } else {
        console.log('读取文件成功' + data);
        fs.writeFile('./test.txt', '666', (err) => {
            if (err) {
                console.log('文件写入失败');
            } else {
                console.log('写入文件成功');
            }
        })
    }
})