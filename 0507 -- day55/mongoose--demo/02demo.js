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
