const fs = require('fs');
const path = require('path');

// 定义匹配style 的正则表达式 
// \s: 空白字符 \S: 非空白字符 [\s\S]: 任意字符
const regStyle = /<style>[\s\S]*<\/style>/

// 定义匹配script 的正则表达式 
const regScript = /<script>[\s\S]*<\/script>/

// 读取需要处理的html文件
fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
    if (err) {
        return console.log('读取文件失败');
    }
    
    const newData = data.toString()
    // 读取成功，拆分文件
    resolveCSS(newData)
    resolveJS(newData)
    resolveHTML(newData)
})

const resolveCSS = (data) => {
    const cssData = regStyle.exec(data)

    // 对提取出来的字符串进行替换操作
    const newCssData = cssData[0].replace('<style>', '').replace('</style>', '')

    // 将处理好的字符串存入存放位置
    fs.writeFile(path.join(__dirname, './处理后/index.css'), newCssData, (err) => {
        if (err) {
           return console.log('写入CSS文件失败'+ err.message);
        }
        console.log('写入CSS文件成功');
    })
}

const resolveJS = (data) => {
    const jsData = regScript.exec(data)
    // 处理
    const newJsData = jsData[0].replace('<script>', '').replace('</script>', '')

    // 写入处理后数据
    fs.writeFile(path.join(__dirname, './处理后/index.js'), newJsData, (err) => {
        if (err) {
            return console.log('写入JS文件失败'+ err.message);
        }
        console.log('写入JS文件成功');
    })
}

const resolveHTML = (data) => {
    // 处理数据
    const htmlData = data
        .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './处理后/index.html'), htmlData, (err) => {
        if (err) {
            return console.log('写入HTML文件失败'+ err.message);
        }
        console.log('写入HTML文件成功');
    })
}