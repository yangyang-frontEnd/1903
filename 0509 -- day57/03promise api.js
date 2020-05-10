//在es6 中新增api promise
/*
 
 * promise 本身不是异步,但是内部都是封装了一个异步操作
 * promise 从初始化的状态切换时,他的状态只能是一种
 * */
var fs = require("fs")


//console.log(1);
//1- 创建promise容器  给别人一个承诺 i promise you
var p1 = new Promise(function(resolve,reject){
//	console.log(2);
	
	fs.readFile("./data/a.txt","utf8",function(err,data){
		if(err){
			//失败了,承诺容器中的任务失败了
//			console.log(err);
			// 把容器的pending状态变为 rejected
			//调用reject就相当于调用了then方法中的第二个参数
			reject(err)
		}else{
//			console.log(3);
			
			//承诺容器中的任务成功了
//			console.log(data);
			// 把容器的pending状态变为 Resolved状态
			//在此处调用的resolve方法实际上就是then方法传递的function
			resolve(data)
//			resolve("bendan")
		}
	})
})
//console.log(4);

//p1的承诺
//当p1成功了 然后(then)做指定的操作
//then方法接收的function就是容器中的 resolve方法
p1.then(function(data){
	console.log(data);
},function(err){
	console.log("读取文件失败"+err);
})
