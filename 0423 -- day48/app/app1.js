//1- 安装express  npm i -S express

//2- 加载包
	//var http = require("http");
	var express = require("express");
	
//3- 创建服务器应用程序
	// var server = http.createServer()
	var app = express();

//公开指定目录

//可以直接通过/public/xx的方式进行访问public中的资源
app.use("/public/",express.static("./public/"))


//4- 请求与响应  当服务器收到get请求/的时候,执行回调函数
	//server.on("request",function(req,res){})
	app.get("/",function(req,res){
		res.send("hello express");
	})
	app.get("/login",function(req,res){
		res.send("欢迎登陆");
	})
	app.get("/reg",function(req,res){
		res.send(`
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="UTF-8">
					<title></title>
				</head>
				<body>
					
					<h1>欢迎注册</h1>
				</body>
			</html>

		`);
	})
	
//5- 绑定端口并启动服务器
	app.listen("3030",function(){
		console.log("服务器已启动")
	})