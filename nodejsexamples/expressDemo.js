var express=require('express');
var app=express();//instance of the express to access all express functionalities
app.use(express.static(__dirname+'/public'));
//app.get('/',(req,res)=>res.send('hello from express'));
//app.use(express.static());
app.listen(3003,()=>console.log('server is started'));