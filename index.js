const express =require('express')
const app=express()
app.get('/',(req,res)=>{

    console.log("hello")
    res.send("Welcome to express js")
})
app.get('/happy',(req,res)=>{

    console.log("hello")
    res.send("I am happy")
})
// app.get('/',(req,res)=>{
//     res.send("hello world")
// })
// app.post()
// app.put()
// app.delete
app.listen(3001,()=>{
    console.log("listning to the port 3000")
})