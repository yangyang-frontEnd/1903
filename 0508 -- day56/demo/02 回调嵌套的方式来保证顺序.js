var fs = require("fs")

fs.readFile("./data/a.txt","utf8",function(err,data){
	if(err){
		throw err
	}
	console.log(data);
	fs.readFile("./data/b.txt","utf8",function(err,data){
		if(err){
			throw err
		}
		console.log(data);
		fs.readFile("./data/c.txt","utf8",function(err,data){
			if(err){
				throw err
			}
			console.log(data);
		})
	})
})


//promise 




/*
 文件越大 读取数据越慢
 
 这个操作是无法保证顺序的
 * */