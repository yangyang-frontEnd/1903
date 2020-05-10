/*
 student.js
 数据操作文件模块
 * 职责:
 * 	操作文件中的数据,处理数据,不关心业务
 * 
 *  这就是学习整个node的精华部分
 * 	封装异步api
 * */

var dbPath = './db.json'
var fs = require("fs")

/*
 	获取所有学生列表
 * 	callback中的参数
 * 		1- err
 * 			成功 :null
 * 			失败:错误对象
 * 		2- data	
 * 			成功:数据[数组]
 * 			失败: undefined null
 * return[]
 * 
 * {Function} callback 回调函数
 * */
exports.find = function(callback){
	fs.readFile(dbPath,"utf8",function(err,data){
		if(err){
			return callback(err);
		}
//		console.log(data);
		callback(null,JSON.parse(data).students)
	})
	
//	find(function(err,data){}){}
}

exports.findById = function(id,callback){
	fs.readFile(dbPath,"utf8",function(err,data){
		if(err){
			return callback(err);
		}
		var students = JSON.parse(data).students
		var ret = students.find(function(item){
			return item.id === parseInt(id)
		})
		callback(null,ret)
	})
}


/*
 	添加保存学生
 * 	
 *  @param {Object} 	student	 	学生对象
 *  @param {Function}	callback	 回调函数
 * */

exports.save = function(student,callback){
	fs.readFile(dbPath,"utf8",function(err,data){
		if(err){
			return callback(err);
		}
		var students = JSON.parse(data).students
		//id唯一 且不重复
		student.id = students[students.length-1].id+1
//		console.log(students);
		//把用户传递的对象保存到数组中
		students.push(student);
		//将js对象转为json对象信息 才能存储到db.json中
		var fileDate = JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileDate,function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
	})
}

//save({
//	name:'132',
//	age:18
//},function(err){
//	if(err){
//		console.log("保存失败")
//	}else{
//		console.log("保存成功了");
//	}
//})

/*
 	更新学生
 * 
 * */

exports.updateById = function(student,callback){
	fs.readFile(dbPath,"utf8",function(err,data){
		if(err){
			return callback(err);
		}
		var students = JSON.parse(data).students
		student.id = parseInt(student.id)
		//要修改的是谁,找到
		//es6 find 数组方法
		//需要接收到一个函数作为参数
		// 当某个变量的项符合item.id === student.id ,find终止执行,同时返回遍历项
		var stu = students.find(function(item){
			return item.id === student.id
		})
//		console.log(stu);
//		stu.name = student.name
//		stu.age = student.age
		//遍历拷贝对象
		for(var key in student){
			stu[key] = student[key]
		}
		//将js对象转为json对象信息 才能存储到db.json中
		var fileDate = JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileDate,function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
		
	})
}


/*
 	删除学生
 * 
 * */
exports.delete = function(id,callback){
	fs.readFile(dbPath,"utf8",function(err,data){
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		//findIndex 方法 用来根据条件查找元素下标的
		var deleteId = students.findIndex(function(item){
			return item.id === parseInt(id)
		})
		
		//根据下标从数组中删除对象的学员兑现
		students.splice(deleteId,1)
		
		//将js对象转为json对象信息 才能存储到db.json中
		var fileDate = JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileDate,function(err){
			if(err){
				return callback(err)
			}
			callback(null)
		})
	})
}
