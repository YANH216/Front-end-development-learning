const name = 'xiaoming'

// 向外共享模块中的属性
const say = (name) => {
    console.log(name);
}

/* module.exports = {
    say
} */

/* exports = {
    say
}  */   
// 导出为 {}
// 在被导入后，由于module.exports 依然指向空对象 故导出的为空对象



module.exports.name = 'yan'
module.exports = {
    age: 10,
    say: () => {
        console.log('123');
    }
}  // 导出为 { age: 10, say: [Function: say] }