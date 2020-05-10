var mongoose = require("mongoose")

var Schema = mongoose.Schema;

//1-链接数据
//指定链接的数据库不需要存在,当插入第一条数据时就会自动创建出来
mongoose.connect("mongodb://localhost/user")

//2-设计文档结构
//字段名称表结构中的属性名称
//约束的目的是为了保证数据的完整性,不要有其他乱七八糟的数据
 var userSchema = new Schema({
    username:{
    	type:String,
    	required:true//必须要
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
/*
 * mongoose.model 方法就是用来将一个架构发布为model
 * 参数1: 传入一个大写的名词字符串用来表示你的数据库的名称
 * 		  mongoose 会自动将大写名词的字符串生成小写复数的集合名称
 * 			User -- users
 * 参数2: 架构Scheema
 * 
 * 返回:模型构造函数
 * */
var User = mongoose.model('User', userSchema);

//4- 当返回模型构造函数之后,就可以使用这个构造函数对user中的数据进行操作(增删改查)

var admin = new User({
	username:"admin",
	password:"123123",
	email:"1102216557@qq.com"
})

admin.save(function(err,ret){
	if(err){
		console.log("保存失败");
	}else{
		console.log("保存成功");
		console.log(ret)
	}
})
