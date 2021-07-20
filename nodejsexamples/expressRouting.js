var express=require('express');
var app=express();
app.get('/',(req,res)=>res.send('hello from node js express'));
app.get('/names',(req,res)=>{
    var names=['Mona', 'sona'];
    res.send(names);
});
app.get('/comp',(req,res)=>res.send("Accenture"));
app.post('/postdata',(req,res)=>res.send('post method executed'));
app.listen(3002,()=>console.log('server has been sytarted'));