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
	console.log(userSchema);
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

//删除数据  删除 username为zs的数据信息
//User.remove({
//	username:"zs"
//},function(err,ret){
//	if(err){
//		console.log("删除失败");
//	}else{
//		console.log("删除成功");
//		console.log(ret);
//	}
//})

//根据id删除数据信息
User.remove({id:"5eb3bdc7461fd311e84017c3"},function(err,ret){
	if(err){
		console.log("删除失败");
	}else{
		console.log("删除成功");
		console.log(ret);
	}
})

