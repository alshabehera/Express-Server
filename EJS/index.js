import express from "express";
import bodyParser from "body-parser"
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));

var today="weekday";
var adv="You have to do work "
app.get("/",(req,res)=>{
    const d = new Date();
    const day = d.getDay();
    if(day===0 || day===6){
        today="weekend";
        adv="you can have fun";
    }
    res.render(__dirname+"/views/index.ejs",{
        dayy:today,advice:adv
    });
})
app.listen(port,()=>{
    console.log("server is in port 3000.")
})