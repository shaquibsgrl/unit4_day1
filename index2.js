const express=require("express");

const app=express();

app.get("/books",(req,res)=>{
    console.log("hello")
    return res.send({book1:"English",book2:"Hindi",book3:"Mathematics",book4:"science"});
})

app.listen(5002,()=>{
    console.log("listenning on 5002")
})