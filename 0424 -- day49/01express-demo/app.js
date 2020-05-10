var http = require("http")

var server = http.createServer()

server.on("request",function(req,res){
	console.log(req.url);
	res.end("123123123123123213123")
})

server.listen(3030,function(){
	console.log("服务器已启动")
})
