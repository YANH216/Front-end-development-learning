const module1 = require('./module1');

// 模块内部的变量只能在模块内访问
// 导入自定义模块，默认指向module.exports这个空对象
// 导入的数据，永远以module.exports指向的对象为准
console.log(module1);