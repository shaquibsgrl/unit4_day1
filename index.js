const express=require("express");

const app=express();

app.get("/users",(req,res)=>{
return res.send("hello")
})

app.listen(4001,()=>{

    console.log("listening on port 4001");
})