//导包
var mongoose = require("mongoose")
var Schema = mongoose.Schema;
//1- 链接数据库
mongoose.connect("mongodb://localhost/students")
//2- 设计文档结构
 var studentSchema = new Schema({
    name:{
    	type:String,
    	required:true
    },
    gender:{
    	type:Number,
    	enum:[0,1],
    	defaule:0
    },
    age:{
    	type:Number
    },
    hobbies:{
    	type:String
    }
  });
//3- 将文档结构发布为模型
module.exports = mongoose.model("Student",studentSchema)