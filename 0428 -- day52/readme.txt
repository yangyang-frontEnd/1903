1- crud 操作(增删改查)

	1- 创建目录 crud-express
	2- npm init -y 快速创建配置问文件 package.json
	3- 安装 npm i -S express
	4- 创建入口文件 app.js 目录:views public
	5- 页面渲染 
		1- 安装 
			npm install --save art-template
			npm install --save express-art-template
		2- 配置
			app.engine('html', require('express-art-template'));
	6- views目录中创建index文件
		1- https://v3.bootcss.com/examples/dashboard/ 将此页面源代码复制到index中
		2- 修改内部链接文件路径
		 		ie10 \ ie9 部分内容全部删除
		 		bootstrap 修改路劲,切记安装的必须是3.3.7的版本
		 		"dashboard.css  将里面的代码拷贝出来
		 		存放到 public/main.css中
		 		
				删除:下面导入的js内容
				成果:
				<!-- Bootstrap core CSS -->
			    <link href="/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
			
			    <!-- Custom styles for this template -->
			    <link href="/public/css/main.css" rel="stylesheet">
			    

2- express -- crud[学生信息管理(增删改查)]
	起步:
		初始化
		模块处理
	路由设计:
		请求方法		请求路径				get参数		post参数						备注
		get			/students													渲染首页
		get			/students/new												渲染添加学员的页面
		post		/students/new					name,age,gender,hobbies		处理添加学员的请求
		get			/students/edit		id										渲染修改页面
		post		/students/edit					id,name,age,gender,hobbies	处理修改请求
		get 		/students/delete 	id										处理删除请求