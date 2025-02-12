const express = require('express')
const port = 3000
const app=express()
const bodyParser=require("body-parser");

app.use(bodyParser.json())
app.get("/route-handler",function(req,res){
  res.json({
    name:"Mayukh",
    age:21
  })
})
app.get('/',(req, res)=>{
  res.send('<b>Not there</b>');
})


app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})