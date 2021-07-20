var express=require('express');
var app=express();//instance of the express to access all express functionalities
app.use(express.static(__dirname+'/public'));

app.get('/contactNumbers',(req,res)=>{
    var c=['12345','67890','45667'];
    res.send(c)
});
app.get('/location',(req,res)=>{
    var json={"Name": 'Accenture',
    "LOcation": 'BDC'};
    res.send(json);
});

app.post('/postData',(req,res)=>{
    res.send('post method is executed');
});
//app.use(express.static());
app.listen(3003,()=>console.log('server is started'));