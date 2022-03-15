-- 查询
-- select username, password from users

-- 插入
-- insert into users (username, password) values ('ww', '123456');

-- 修改
-- update users set password='888888' where id=1 
-- update users set password=666666,status=1 where id=2

-- 删除 
-- delete from users where id=3

-- where 子句
-- select * from users where status=1 
-- select * from users where id!=2


-- and 运算符
-- select * from users where status=0 and id>3


-- or 运算符
-- select * from users where status=0 or id<3

-- order by 排序   desc 降序排序
-- select * from users order by id desc

-- order by 多重排序 
-- select * from users order by status desc, username

-- count(*) 函数 显示数据条数
-- select count(*) from users where status=0

-- as 设置别名
-- select count(*) as total from users where status=0




