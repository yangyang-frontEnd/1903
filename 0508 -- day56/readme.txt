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


1- 回顾上一节内容
	1- 设计scheme发布model
		//导包
		var mongoose = require("mongoose")
		var Schema = mongoose.Schema;
		//1- 链接数据库
		mongoose.connect("mongodb://localhost/students")
		//2- 设计文档结构
		 var userSchema = new Schema({
		    username:{
		    	type:String,
		    	required:true
		    },
		    password:{
		    	type:String,
		    	required:true
		    },
		    email:{
		    	type:String
		    }
		  });
		//3- 将文档结构发布为模型
		var User = mongoose.model("User",userSchema)
		//4- 执行增删改查操作
	2- 添加数据操作
		var admin = new User({
			username:"ls",
			password:"123456",
			email:"admin@123.com"
		})
		
		admin.save(function(err,ret){
			if(err){
				console.log("保存失败");
			}else{
				console.log("保存成功");
				console.log(ret);
			}
		})
	3- 查询数据操作
		查询所有数据并返回集合
			User.find(function(err,ret){
				if(err){
					console.log("查询失败");
				}else{
					console.log(ret);
				}
			})
		查询指定条件的数据并返回集合
			User.find({username:"admin"},function(err,ret){
				if(err){
					console.log("查询失败");
				}else{
					console.log(ret);
				}
			})
		查询指定条件的数据并返回对象
			User.findOne({username:"admin"},function(err,ret){
				if(err){
					console.log("查询失败");
				}else{
					console.log(ret);
				}
			})
	
	4- 删除数据
		User.remove({username:"admin"},function(err,ret){
			if(err){
				console.log("删除失败");
			}else{
				console.log("删除成功");
				
				console.log(ret);
			}
		})
	
	5- 修改数据
		User.findByIdAndUpdate("5eb4fc043ad009206ceaaa3c",{
			password:"666666"
		},function(err,ret){
			if(err){
				console.log("修改失败");
			}else{
				console.log("修改成功");
				console.log(ret);
			}
		})

2- 数据的修改
3- crud 改写 -- 数据库
4- 回调地狱  promise
5- 明天上午:11:00 --- 12:00 补课   13:30 -- 15:40