//1- 导包
var express = require("express");
//2- 安装app
var app = express();

app.use("/node_modules/",express.static("./node_modules"))
app.use("/public/",express.static("./public"))

app.engine('html', require('express-art-template'));

//3- 基本路由操作
app.get("/",function(req,res){
//	res.send("animationStartTime")
	res.render("index.html",{
		info:[
			'二蛋',
			'瓜子',
			'花生米'
		],
		students:[
			{"id":1,"name":"战三1","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":2,"name":"战三2","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":3,"name":"战三3","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":4,"name":"战三4","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":5,"name":"战三5","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":6,"name":"战三6","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"},
			{"id":7,"name":"战三7","sex":"0","age":18,"hobby":"吃王者吃鸡英雄"}
		]
	})
})
//4- 绑定端口启动服务器
app.listen(3030,function(){
	console.log("服务器已启动");
})
