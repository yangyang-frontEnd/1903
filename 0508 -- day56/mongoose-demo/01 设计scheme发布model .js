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

//添加数据
/*var admin = new User({
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
})*/

//查看数据 查询所有数据
	
	User.find(function(err,ret){
		if(err){
			console.log("查询失败");
		}else{
			console.log(ret);
		}
	})
	
	
	//根据指定条件查询数据
//	User.find({username:"admin"},function(err,ret){
//		if(err){
//			console.log("查询失败");
//		}else{
//			console.log(ret);
//		}
//	})

// 根据指定数据查询条件并会对对象信息
//User.findOne({username:"admin"},function(err,ret){
//		if(err){
//			console.log("查询失败");
//		}else{
//			console.log(ret);
//		}
//	})
//	


//删除数据
//User.remove({username:"admin"},function(err,ret){
//	if(err){
//		console.log("删除失败");
//	}else{
//		console.log("删除成功");
//		
//		console.log(ret);
//	}
//})


//修改数据
/*
 *  参数1:要更新数据的id
 *  参数2:要跟新数据的内容
 *  参数3:回调函数
 * 
 * */
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







