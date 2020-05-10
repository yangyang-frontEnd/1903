//0- 导包
	var mongoose = require("mongoose");
	var Schema = mongoose.Schema;
//1- 链接数据
	//在链接数据库时,如果数据库不存在,系统会自动创建一个出来
	mongoose.connect("mongodb://localhost/student");
//2- 设计表结构
	/*
	 	字段名称就是表结构的属性名称
	 	约束的目的,保证数据的完整性
	 * */
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
//	console.log(userSchema);
//3- 将文档结构发出为模型
	/*
	 	mongoose.model 就是用来发布model
	 	参数1:
	 		传入的是一个大写的名字,数据的名称,
	 		mongoose会自动将名字转为 users 作为集合的名称
	 		User 转为 users
	 	参数2: 架构schema
	 	返回:模型结构函数
	 */
var User = mongoose.model("User",userSchema)
//4- 当我们有了模型之后,就可以对users表进行操作 增删改查

//查询所有数据
User.find(function(err,ret){
	if(err){
		console.log("查询失败");
	}else{
		console.log(ret);
	}
})

/*//查询单条数据 name 为 admin 返回的是集合
User.find({username:"admin"},function(err,ret){
	if(err){
		console.log("查询失败");
	}else{
		console.log(ret);
	}
})*/

//查询单条数据 name 为 admin 返回的是对象
//User.findOne({username:"admin"},function(err,ret){
//	if(err){
//		console.log("查询失败");
//	}else{
//		console.log(ret);
//	}
//})


//查询 users表中 username:admin password:123456的数据信息
//User.find({
//	username:"admin",
//	password:"123456"
//},function(err,ret){
//	if(err){
//		console.log(err);
//	}else{
//		console.log(ret);
//	}
//})
