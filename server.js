const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static(__dirname+'/Public'))
//routes
//app.get('/home',(req,res)=>{
    
    //res.sendFile(__dirname+'/Public/home.html')
//})

//app.get('/services',(req,res)=>{
    
    //res.sendFile(__dirname+'/Public/services.html')
//})

//app.get('/contact',(req,res)=>{
    
    //res.sendFile(__dirname+'/Public/contact.html')
//})

app.use('/views',require('./routes/view'))




app.listen(5000,err=>{
    if(err) throw err
    else console.log('server is running on port 5000')
})


       
