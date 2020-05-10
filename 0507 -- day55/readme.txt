1- 回顾上周内容 mongodb
2- 数据库操作 在node中操作数据库
===============================================
1- 回顾上周内容 mongodb
	1- MongoDB数据
		1- 安装
			软件 .msi 后缀名
			32位系统 -- 名字中带 i386
		2- 配置了环境变量
			计算机图标 -- 右键 --- 属性 --- 高级系统设置 ---- 环境变量 -- 编辑path
			路径为:C:\Program Files\MongoDB\Server\3.2\bin
		3- 数据库启动
			mongod --storageEngine=mmapv1 --dbpath C:\data\db
		4- 链接数据库与断开数据库链接
			链接:mongo
			断开:exit 或者 直接关闭
		5- 基础命令
			a- 查看所有数据库 并显示  show dbs
			b- 进入数据,切换到指定的数据 use 数据库名称
			c- 查看当前操作的数据库,查看数据库所在位置 db
			d- 查看数据集合 show collections
			e- 查看数据 db.student.find()
			f- 插入数据 db.student.insert({"name":"123"}) 
	2- 在node中操作数据库 第三方模块 mongoose
		文档查看:
			官方文档:https://mongoosejs.com/
		1- 安装 mongoose
			npm i -S mongoose
		2- 数据库的基本配置
			//1-导入第三方模块
			var mongoose = require("mongoose");
			
			//2-链接mongodb数据
			mongoose.connect("mongodb://localhost/test");
			
			//3- 创建模型
			var User = mongoose.model('User', { name: String})
			
			//实例化一个zs
			var zs = new User({name:"张三"})
			
			//持久化保存
			zs.save(function(err){
				if(err){
					console.log(err)
				}else{
					console.log("执行成功")
				}
			})
	3- MongoDB数据的基本概念
		1- 可以同时存在多个数据库
		2- 可以同时存在多个数据表
		3- 数据表中可以同时存在多条数据
		特点: 结构灵活,没有限制
