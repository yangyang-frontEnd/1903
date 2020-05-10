var fs = require("fs")
var p1 = new Promise(function(resolve,reject){
	fs.readFile("./data/a.txt","utf8",function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})
var p2 = new Promise(function(resolve,reject){
	fs.readFile("./data/b.txt","utf8",function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})
var p3 = new Promise(function(resolve,reject){
	fs.readFile("./data/c.txt","utf8",function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

p1
	.then(function(data){
		console.log(data);
		/*
		 * 当p1执行成功时
		 * return 的结果就可以在后面的then方法的function接收到
		 * return 123  接收到的就是123
		 * return "aaa" 接收到的就是aaa
 		 * return 没有返回任何数据 接收到的就是 undefined
 		 * 
 		 * promise对象中 成功状态的信息
		 */
		return p2
	},function(err){
		console.log("读取文件失败"+err);
	})
	.then(function(data){
		console.log(data);
		return p3
	})
	.then(function(data){
		console.log(data)
	})
