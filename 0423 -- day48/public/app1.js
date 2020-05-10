// 安装express    npm i -S express
// 加载express包
    var express=require("express");
// 创建服务器应用程序
    var app=express();
// 可以通过/public/xx的方式进行访问public的资源
    app.use("/public/",express.static("./public/"))
// 请求响应
    // app.get("/",(req,req)=>res.send("hello world!!"))
    app.get("/",function(req,res){
        res.send("hello  express!!");
    })
    app.get("/login",function(req,res){
        res.send("欢迎登陆!!");
    })
    app.get("/reg",function(req,res){
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                <h1>欢迎注册</h1>
            </body>
            </html>
        `)
    })
// 绑定端口启动服务器
    // app.listen("3030",()=>console.log("服务器已启动"))
    app.listen("3030",function(){
        console.log("服务器已启动")
    })