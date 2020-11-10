const express=require("express")
const app= express()
const bodyParser=require('body-parser')
app.set("view engine","ejs")
const calc=require(__dirname+"/calc")
app.use(bodyParser.urlencoded({extended:true})) 
var va1;
var va2;
var op;

app.get('/',function(req,res){
    res.render("index",{tt:""})
})
app.post("/",function(req,res){

    if(req.body.calc!="equal" && req.body.calc!="cls")
    {
        va1=parseInt(req.body.no)
        op=""+req.body.calc;
        res.render("index",{tt:""}) 
    }
    else if(req.body.calc=="equal")
    {
        va2=parseInt(req.body.no)
        if(op=="add")
        res.render("index",{tt:calc.add(va1,va2).toString()}) 
        else if(op=="sub")
        res.render("index",{tt:calc.sub(va1,va2).toString()}) 
        else if(op=="mul")
        res.render("index",{tt:calc.mul(va1,va2).toString()}) 
        else 
        res.render("index",{tt:calc.div(va1,va2).toString()}) 
    }
    else{
        res.render("index",{tt:""}) 
    }
    

    
      
        
        
    
    


})

app.listen(3000)