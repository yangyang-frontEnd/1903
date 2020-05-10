var express=require("express");
var app=express();
app.get("/",(req,res)=>res.send("hello world"))
app.listen("3030",()=>console.log("服务器已启动"))