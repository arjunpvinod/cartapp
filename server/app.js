var express = require('express')
const app = express();

var Router = require('./routes/bookRouter')
app.use("/books",Router)

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
    next();
})  


app.listen(8000,function(req,res){
    console.log("Server started listening")
})

module.exports = Router;