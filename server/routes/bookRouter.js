var express = require('express')
const Router = express.Router()


var bodyparser = require('body-parser')
Router.use(bodyparser.urlencoded({extended:true}))
Router.use(bodyparser.json())

var mongodb = require("mongodb")
var mongoclient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb"

Router.post("/add",function(req,res){

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
    
    mongoclient.connect(url,function(err,dbs){
        if(err){
            console.log(err)
        }
        else{
            let mydb = dbs.db("sample")
            var book_table = mydb.collection("book")
            var data = {title:req.body.Bookitem.Title,author:req.body.Bookitem.Author,price:req.body.Bookitem.Price}

            book_table.insert(data,function(req,res){
                console.log("Data entered successfully")
            })
        }
   })
})

Router.get("/view",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
    mongoclient.connect(url,function(err,dbs){
        if(err){
            console.log(err)
        }
        else{
            let mydb = dbs.db("sample")
            var book_table = mydb.collection("book")
            
            book_table.find().toArray(function(err,data){
                if(err) {throw err;}
                else{
                    res.send(data)
                }
            })
                
            
            }
        })
   })

   Router.post("/remove",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
    mongoclient.connect(url,function(err,dbs){
        if(err){
            console.log(err)
        }
        else{
            let mydb = dbs.db("sample")
            var book_table = mydb.collection("book")
            var data = {title:req.body.Bookitem.Title}
            book_table.remove(data,function(err,result){

                if(err) {throw err;}
                else{
                    res.send("data deleted")
                }


            })
            
            }
                
                
            })
                
            
            })
        

            Router.post("/search",function(req,res){
                res.header("Access-Control-Allow-Origin","*");
                res.header("Access-Control-Allow-Origin","http://localhost:4200/");
                res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
                res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
                mongoclient.connect(url,function(err,dbs){
                    if(err){
                        console.log(err)
                    }
                    else{
                        let mydb = dbs.db("sample")
                        var book_table = mydb.collection("book")
                
                        book_table.find({title:req.body.Title}).toArray(function(err,data){
                            if(err) {throw err;}
                            else{
                                res.send(data)
                            }
                        })
                            
                        
                        }
                    })
               })
            


               Router.post("/update",function(req,res){
                res.header("Access-Control-Allow-Origin","*");
                res.header("Access-Control-Allow-Origin","http://localhost:4200/");
                res.header("Access-Control-Allow-Origin","GET,PUT,POST,DELETE");
                res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
                mongoclient.connect(url,function(err,dbs){
                    if(err){
                        console.log(err)
                    }
                    else{
                        let mydb = dbs.db("sample")
                        var book_table = mydb.collection("book")
                        let condition = {title:req.body.Bookitem.Title}
                        let newdata ={$set:{author:req.body.Bookitem.Author,price:req.body.Bookitem.Price}}
                        book_table.update(condition,newdata,function(err,data){
                            if(err) {throw err;}


                            else{
                                res.send("data updated")
                            }
                        })
                            
                        
                        }

                        })
                    
                        
                            
                            
                        
                        
                    })
               
            

               

module.exports = Router