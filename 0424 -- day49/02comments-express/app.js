//1- 导包
var express = require("express");

var bodyParser = require('body-parser')

//创建app
var app = express();

app.use("/public/",express.static("./public/"))


/*
   配置使用art-template
 * 第一个参数:表示当前渲染.art结尾的文件的时候,使用art-template模板引擎
 * express-art-template 是专门用来在express中把art-template整合到express中
 * express-art-template 依赖于art-template
 * */
app.engine('html', require('express-art-template'));


/*
 express 为 response 响应对象提供了一个方法 ,redder()
 * render默认情况下是不可以使用的,但是如果配置了模板引擎就可以使用,
 * res.render("html模板名",{模板数据})
 * 第一个参数不能写路径,默认会去项目中的views的目录查找该模板文件
 * 约定标准,所有的视图文件都存入views目录中
 * 
 * 备注:
 * 	如果想要修改默认views目录,可以使用app.set()
 *  此views 非彼 views
 *  app.set('views',render函数的默认路径)
 * */

//配置body-parser
//只要加入了这个配置,就可以在req请求对象上多出一个属性,body
//可以直接通过req.body来获取post请求体的数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var comments = [
	{
		name:"张三疯",
		message:"今天周五了",
		dataTime:"2020-4-24"
	},
	{
		name:"张三疯",
		message:"今天周五了,兴不兴奋",
		dataTime:"2020-4-24"
	},
	{
		name:"张三疯",
		message:"今天周五了,开不开心",
		dataTime:"2020-4-24"
	},
	{
		name:"张三疯",
		message:"今天周五了,吃鸡\王者\英雄走起来",
		dataTime:"2020-4-24"
	}
]

//通过get请求
app.get("/",function(req,res){
//	res.send("/index page")
	res.render("index.html",{
		comments:comments
	});
})

app.get("/login",function(req,res){
	res.render("login/login.html",{
		title:"大华1903H5最强"
	});
})


app.get("/post",function(req,res){
//	res.send("/post page");
	res.render("post.html")
})

/*
 基础路由:post
 * 以post请求/post的时候执行此处理函数
 * 可以利用不同的请求方式,让一个路径使用多次
 * */
app.post("/post",function(req,res){
	console.log("收到了post请求");
	//1- 获取表单post请求体的数据
	var comment = req.body
	comment.dataTime = "2020-04-24 15:17:23";
	
	//2- 处理
	comments.unshift(comment)
	//3- 发送相应
	res.redirect("/")
//	console.log(req.body);
//	res.send("post")
	
})
/*app.get("/pinglun",function(req,res){
//	console.log(req.query);
	var comment = req.query
	comment.dataTime = "2020-04-24 15:17:23";
	comments.unshift(comment)
	console.log(comments);
	res.redirect("/")
//	res.statusCode = 302
//	res.setHeader("Location","/")
})*/

//绑定端口启动服务器
app.listen(3030,function(){
	console.log("服务器已启动");
})
