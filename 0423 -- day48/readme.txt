1-require加载规则
	核心模块
		fs\http\os\path\url
		require("模块名")
	第三方模块
		art-template \ bootstrap \ jquery
		require("模块名")
	自己编写的模块
		foo
		require("路径")
2-require标识符分析
	//如果是非路径形式的模块标识
//路径形式
/*
 	./ 当前目录
 	../
 	/XXX
 	d:/
	首位的/在这里表示的是当前文件木块所属的磁盘路径
	.js后缀名是可以省略
 */
//require("./foo.js")

//核心模块
/*
 	核心模块的本质就是文件
 	核心模块文件已经被编译到二进制文件中,我们只需要按照名字进行加载即可
 	如果想查看核心模块的文件
 	https://github.com/nodejs/node/blob/master/lib/fs.js
// * */
//require("fs")
//require("http")


/*
 //第三方模块 查找机制
 * 1- 凡是第三方模块都必须通过npm进行下载\
 * 2- 使用的时候就可以通过require("包名")的方式来进行加载使用即可
 * 3- 任何一个第三方的包与核心模块的名字是不一样的
 * 4- 既不是核心模块,也不是路径形式的模块
 * 	先找到当前文件所在目录中的 node_modules目录
 *  node_modules/art-template
 *  node_modules/art-template/package.json文件
 *  node_modules/art-template/package.json文件中是否有main这个属性
 *  node_modules/art-template/package.json文件中是否有main这个属性 记载了art-template的一个入口模块
 *  然后加载使用这个第三方的包 
 * */
require("art-template")
require("a")

/*
 * 如果package.json文件中不存在或者main指定的入口模块也没有
 * node会自动去找该目录下的index.js
 * index.js被默认为一个备选项
 * 
 * 如果没有找到指定文件或者index.js文件,则会进入上一级目录中的node_modules目录中查找
 * 
 * 如果直到磁盘根目录还找不到,最后报错:
 * Cannot find module 'F:\win10资料\HBuilderProjects\win7\1903\0421 -- day46
 * 
 * 注意:一个项目只有一个node_modules,放在项目的根目录中,这样项目中的子目录中的代码都可以加载到第三方包
 * */

3-包文件说明(npm)
	npm( node package manager)
		同时安装多个第三方模块的方式
			npm install 包名 包名 包名 回车即可
			npm install art-template jquery bootstrap
			
			npm install jquery --save
			在安装第三方模块的时候 同时生成一个package.json的文件,(描述文件\说明文档)
			node_moduls
			package.json
				{
					"dependencies":{
						"jquery":"^3.3.3"
					}
				}
			如果生成了上面的这个package.json文件 ,直接将node_modules目录直接删除
			在命令行中直接输入 npm install 查看是否可以将node_modules目录还原回来
	package.json
	
	npm init 初始化 预习
4-周测试讲解


======================================================
0422 -- day47 
1- 包文件说明
	npm
	//包安装向导
	F:\win10资料\HBuilderProjects\win7\1903\0422 -- day47\01 npm_demo>npm init
	This utility will walk you through creating a package.json file.
	It only covers the most common items, and tries to guess sensible defaults.
	
	See `npm help json` for definitive documentation on these fields
	and exactly what they do.
	
	Use `npm install <pkg>` afterwards to install a package and
	save it as a dependency in the package.json file.
	
	Press ^C at any time to quit.
	package name: (01-npm_demo) 		//项目名称
	version: (1.0.0) 0.0.1				//项目版本
	description: 这是一个测试项目			//项目信息的描述
	entry point: (index.js) main.js		//入口文件
	test command:						//测试命令
	git repository:						//项目存放到GitHub中,需要在这里放上仓库地址(目前不需要)
	keywords:							//关键字
	author: 123							//作者
	license: (ISC)						//开源
	About to write to F:\win10资料\HBuilderProjects\win7\1903\0422 -- day47\01 npm_d
	emo\package.json:
	
	{
	  "name": "01-npm_demo",
	  "version": "0.0.1",
	  "description": "这是一个测试项目",
	  "main": "main.js",
	  "dependencies": {
	    "jquery": "^3.5.0"
	  },
	  "devDependencies": {},
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "author": "123",
	  "license": "ISC"
	}
	
	
	Is this OK? (yes) yes //输入yes确认

	package.json
		 "dependencies": {
		    "art-template": "^4.13.2",
		    "jquery": "^3.5.0"
		  },
		  可以用来保存第三方包的依赖信息
		 	1- 每个项目中的根目录都要有一个package.json文件
		 	2- 在执行的时候都会在 npm install 包名 后面跟 --save这选项,就是用来保存依赖项信息
2- npm常用命令
	npm网站
		npmjs.com
	npm命令行工具
		npm的第二层意思就是命令行工具,只要安装了node就已经安装了npm
		查看版本
			npm -v
		或者
			npm --version
		升级npm
			npm install --global npm
		
		npm常用命令
			npm init 向导
				npm init -y 可以跳过向导,快速安装
			npm install 
				一次性把dependencies选项中的依赖项全部安装
				npm i
			npm install 包名
				下载
				npm i 包名
			npm install --save 包名
				下载切保存依赖项(package.json 文件中的dependencies选项)
				npm i -S 包名
			npm uninstall 包名   
				删除包并且删除package中的依赖项
				npm un 包名
				npm uninstall --save 包名
				npm un -S 包名
			npm ls 查看安装的模块	
			npm help 查看某条命令的详细帮助 
			npm 命令 --help
				查看指定命令的使用帮助
				npm uninstall --help 查看这个命令的一个使用帮助
			
			常用npm命令网址
			https://www.cnblogs.com/PeunZhang/p/5553574.html
		
		解决npm被墙的问题
			npm存储包文件的服务器在国外,有时候会被墙,速度很慢,我们解决这个问题	
			npm.taobao.org 淘宝开发团队把npm在国内做一个备份
			
			两种方式:
			安装淘宝的cnpm
				//在任何路径下执行都可以
				//--global 表示安装到全局,不是当前目录
				npm install --global cnpm
			接下来安装所有的第三方模块的命令 npm全部换成cnpm
				//走的国外的服务器,速度比较慢
				npm install jquery
				//使用cnpm通过淘宝的服务器来下载jquery
				cnpm install jquery
			不想安装cnpm又想使用淘宝服务器来进行下载
			 npm install -g cnpm --registry=https://registry.npm.taobao.org
			每一次手动都比较麻烦,可以再配置文件中添加一个选项
			npm config set registry https://registry.npm.taobao.org
			通过上面的配置,则可以使用npm install 包名 都会默认通过淘宝的服务器下载
			查看配置信息:
				npm config list

3- express 介绍与安装
4- 小例子
5- 周测试讲解(10人)

其他:
	命令行中创建目录
		mkdir 文件名
	命令行中删除目录
		rmdir 文件名


作业:
	只要我不说  机敲一遍 手抄一遍 (特殊情况会提前说明)
	
	从明天开始 不提交作业的人  
		第一次:讲你的名字提交各班主任
		第二次:我直接找家长
	
1- express 
	原生http在某些方面表现不足以应对我们的开发需求,所以我们需要使用框架来提高我们的开发效率
	
	web开发框架:express
	
	1- 安装
		npm install --save express
	2- hello world
		//1- 导入包
		var express = require("express");
		
		//2- 创建app
		var app = express();
		
		//3- 执行请求与响应操作
		app.get("/",function(req,res){
			res.send("helloworld")
		})
		
		//4- 绑定端口并启动服务器
		app.listen(3030,function(){
			console.log("服务器已启动 ");
		}) 
		
		或者
		var express = require("express");

		var app = express();
		
		app.get("/",(req,res)=>res.send("hello world"))
		
		app.listen("3030",()=>console.log("服务器已启动"))
		
	3- 基本路由
		路由器:
			请求方式
			请求路径
			请求处理函数
		get: 当以get方式请求/的时候,执行对应的处理函数
			app.get("/",function(req,res){
				res.send("helloworld")
			})
		post:当以post方式请求/的时候,执行对相应的处理函数
			app.post("/",function(req,res){
				res.send("helloworld")
			})
	4- 静态服务
		app.use(express.static("public"))
		
		app.use("/public",express.static("public"))
		
