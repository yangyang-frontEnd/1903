/*
 router.js 路由模块
 * 职责:
 * 	处理路由
 * 	根据不同的请求方式&请求路径设置具体的处理函数
 *  模块职责单一 ,不能随意添加
 *  划分的目的:增强代码的可读性,可维护性,挺高开发效率
 * 
 * */
//在express中提供了一种更好的方式 包装路由

//导入包  express
var express = require("express")
var fs = require("fs")
var Student = require("./student")


//Student.updateById({
//	id:5,
//	name:"1231231322132131",
//	age:19
//},function(err){
//	if(err){
//		return console.log("修改失败");
//	}
//	console.log("修改成功");
//})
////1- 创建路由容器
var router = express.Router();

//2- 将路由都挂载到这个容器中
router.get("/students",function(req,res){
	Student.find(function(err,students){
		if(err){
			return res.status(500).send("失败了")
		}
		res.render("index.html",{
				info:[
					'二蛋',
					'瓜子',
					'花生米'
				],
				students:students
		})	
	})	
})
router.get("/students/new",function(req,res){
	res.render("new.html")
})
router.post("/students/new",function(req,res){
	//1- 获取表单数据
	//2- 处理
		//将数据保存到db.json文件中实现持久化
	//3- 发送相应
	//先读取出来,转成对象
	//然后往对象里面,push数据
	//把对象转为字符串
	//然后把字符串再次写入文件中
	console.log(req.body);
	Student.save(req.body,function(err){
		if(err){
			return res.status(500).send("失败了")
		}
		res.redirect("/students")
	})
	
})
//渲染编辑学员信息界面
router.get("/students/edit",function(req,res){
	//1- 在客户端列表中处理链接问题(需要有id参数)
	//2- 获取要编辑学生的id
	//3- 渲染页面
		//根据id查出学员信息
		//使用模板引擎渲染
//	console.log(req.query.id);
	Student.findById(parseInt(req.query.id),function(err,student){
		if(err){
			return res.status(500).send("失败了")
		}
		console.log(student);
	})
	res.render("edit.html")
})
router.post("/students/edit",function(req,res){
	//1- 获取表单数据
//	req.body
	//2- 更新
//	Student.updateById()
	//3- 发送相应
})
router.get("/students/delete",function(req,res){})

//3- 把router导出
module.exports = router











//不方便
/*module.exports = function(app){
//	var app = require("./app")
var fs = require("fs");

app.get("/students",function(req,res){
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
	
})

}*/

