// 安装 express

//1- 导入包
var express = require("express");

//2- 创建app
var app = express();

//在express中开放资源使用其中的api即可
//指定公开目录
//  /punblic/xx
app.use("/public/",express.static("./public/"))
//3- 执行请求与响应操作
app.get("/",function(req,res){
//	res.write("hello")
//	res.write("world")
//	res.end()

//res.end("animationStartTime")

res.send("helloworld")
})

app.get("/login",function(req,res){
	res.send("欢迎登陆")
})

//4- 绑定端口并启动服务器
app.listen(3030,function(){
	console.log("服务器已启动 ");
})
