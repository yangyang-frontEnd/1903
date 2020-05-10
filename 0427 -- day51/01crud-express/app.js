/*
 app.js入门模块
 
 *	职责:
 * 		创建服务
 * 		做一些配置
 * 			模板引擎
 * 			body-parser 解析post请求体
 * 			静态资源服务
 *		挂载路由
 * 		监听端口启动服务
 * */

//1- 导包
var express = require("express")
var router = require("./router")

//2- 安装app
var app = express();

app.use("/node_modules/",express.static("./node_modules"))
app.use("/public/",express.static("./public"))

app.engine('html', require('express-art-template'));


//把路由容器挂载到app服务中
app.use(router)

//router(app)

/*//3- 基本路由操作
app.get("/",function(req,res){
//	res.send("animationStartTime")
//  readFile的第二个参数是可选,传入utf8就是告诉他把读取到的内容直接按照utf8编码转成我们所认识的字符串
	fs.readFile("./db.json","utf8",function(err,data){
		if(err){
			return res.status(500).send("服务器出错了!!!")
		}
//		console.log(data.toString());
//		console.log(typeof data);
//		console.log(JSON.parse(data).students)
		//从文件中读取到的数据一定是字符串
		//所以在这里我们还需要进行一个手动的转换
		var students = JSON.parse(data).students
		//页面数据的渲染
		res.render("index.html",{
			info:[
				'二蛋',
				'瓜子',
				'花生米'
			],
			students:students
		})
	})
	
})*/
//4- 绑定端口启动服务器
app.listen(3030,function(){
	console.log("服务器已启动");
})


module.exports = app