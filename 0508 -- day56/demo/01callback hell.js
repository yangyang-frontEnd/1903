var fs = require("fs")

fs.readFile("./data/a.txt","utf8",function(err,data){
	if(err){
//		return console.log("读取失败");
	/*
	 抛出异常
	 *  1- 组织程序的执行
	 *  2- 把错误信息打印到控制台
	 * 
	 * */
	throw err
	}
	console.log(data);
})

fs.readFile("./data/b.txt","utf8",function(err,data){
	if(err){
//		return console.log("读取失败");
	/*
	 抛出异常
	 *  1- 组织程序的执行
	 *  2- 把错误信息打印到控制台
	 * 
	 * */
	throw err
	}
	console.log(data);
})

fs.readFile("./data/c.txt","utf8",function(err,data){
	if(err){
//		return console.log("读取失败");
	/*
	 抛出异常
	 *  1- 组织程序的执行
	 *  2- 把错误信息打印到控制台
	 * 
	 * */
	throw err
	}
	console.log(data);
})

/*
 文件越大 读取数据越慢
 
 这个操作是无法保证顺序的
 * */