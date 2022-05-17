const express = require('express')
const router = express('express.router')
//lire ficher css
const path = require('path')
const hours=(new Date().getHours())
//Middleware
const myLogger = (req, res, next)=> {
    if (hours>=11 && hours<=17){
         console.log('we are opned')
        
         next();
    }
   
    else {console.log('we are closed');
    res.sendFile(path.join(__dirname,'../','Public','close.html'))
     
    }
}
   
    //router
    
    router.get('/',myLogger,(req,res)=>{
        res.sendFile(path.join(__dirname,'../','Public','home.html'))
    })
    router.get('/contact',myLogger,(req,res)=>{
        res.sendFile(path.join(__dirname,'../','Public','contact.html'))
    })
    router.get('/services',myLogger,(req,res)=>{
        res.sendFile(path.join(__dirname,'../','Public','services.html'))
    })
    
    module.exports=router