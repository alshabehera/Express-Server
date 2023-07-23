const express=require("express");
const app=express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
    console.log(__dirname);
})
app.post("/",function(req,res){
    console.log("Thank you");
    console.log(req.body);
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var sum=n1+n2;
    res.send( "The sum of the given input is " + sum);

})
app.listen(3000,function(){
    console.log("Server is on local hoat 3000");
    
})