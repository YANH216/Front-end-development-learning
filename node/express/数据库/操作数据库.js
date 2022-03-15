// 导入mysql 模块
const mysql = require('mysql');
// 建立与MySQL数据库的链接

const db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的ip地址
  user: 'root',  // 登录数据库的账号
  password: 'admin123',  // 登录数据库的密码
  database: 'my_db_01'  // 要操作的数据库
})

// 测试mysql模块是否正常工作
/* db.query('select 1', (err, results) => {
  // 工作期间报错
  if (err) {
    return console.log(err.message)
  }
  // 正常运行
  console.log(results)
}) */

// 查询users表中的所有数据
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
  // 查询失败
  if (err) return console.log(err.message)
  // 查询成功
  // 执行select语句 得到的结果是数组
  console.log(results)
}) */

// 插入数据
// 定义要插入users表中的数据对象
/* const user = { username: 'yh5', password: '555555' }
// 待执行的sql语句
// 用? 表示占位符,后面执行时再添加值
const sqlStr = 'insert into users (username, password) values (?,?)'
// 执行sql语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 失败
  if (err) return console.log(err.message)

  // 成功
  // 如果执行的insert into 返回的结果是对象类型,可以通过affectedRows属性,来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
}) */


// 如果插入数据与数据表字段一一对应 可使用下面快捷方式插入
/* const user = { username: 'yh6', password: '666666'}
const sqlStr = 'insert into users set ?'
db.query(sqlStr, user, (err, res) => {
  if (err) return console.log(err.message)
  if (res.affectedRows === 1) {
    console.log('插入数据成功')
  }
}) */

// 更新数据
/* const user  = { id: 5, username: 'yh1' }
const sqlStr = 'update users set username=? where id=?'

// 执行sql语句
// 执行update之后  返回结果和判断方式与insert into 一样
db.query(sqlStr, [user.username, user.id], (err, res) => {
  if (err) return console.log(err.message)

  if (res.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) */

// 更新数据便捷方法
/* const user = { id: 2, username: 'yh0', password: '000000', status: 0}

const sqlStr = 'update users set ? where id=?'

db.query(sqlStr, [user, user.id], (err, res) => {
  if (err) return console.log(err.message)

  if (res.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) */

// 删除数据 删除id=1的数据
/* const sqlStr = 'delete from users where id=?'
// 如果占位符只有一个 可以不写数组
db.query(sqlStr, 1, (err, res) => {
  if (err) return console.log(err.message)

  if(res.affectedRows === 1) {
    console.log('删除数据成功')
  }
}) */

// 标记删除
// 直接delete 比较危险, 建议定义一个标记字段,用更新这个字段状态来模拟删除
const user = { id: 2, status: 1 }
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr, [user, user.id], (err, res) => {
  if (err) return console.log(err.message)

  if (res.affectedRows === 1) {
    console.log('(标记删除用户成功)更新用户状态成功')
  }
})