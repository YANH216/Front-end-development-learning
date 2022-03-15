const path = require('path');

const fPath = '/a/b/c/index.html'

// 获取基础文件名
const fullPath = path.basename(fPath)
console.log(fullPath);  // index.html

// 去掉基础文件名的扩展名
const nameWithoutExt = path.basename(fPath, '.html')
console.log(nameWithoutExt);  // index

// 获取基础文件名的扩展名
const fExt = path.extname(fPath)
console.log(fExt);  // .html