import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port= 3000;
var userIsAuthorised = false;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function authentication(req,res,next){ 
    var password= req.body["password"];
    if (password === "ILoveProgramming"){
        userIsAuthorised = true;
    }
    next();
}
app.use(authentication);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/indexx.html");

})
app.post("/check",(request,response)=>{
    if(userIsAuthorised){
        const fname =request.body["first"] 
        const lname=request.body["second"]
        
        response.sendFile(__dirname+"/secret.html")
    
    }
    else{
        response.sendFile(__dirname+"/indexx.html")
    }
})

app.listen(port,function(){
    console.log("server is in port 3000.");
})
