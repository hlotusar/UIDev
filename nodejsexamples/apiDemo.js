var express=require('express');
var app=express();//instance of the express to access all express functionalities

//body parser import
const bodyParser = require('body-parser');

//attach middleware
app.use(bodyParser.json());

app.get('/',(req,res)=>res.send('hello from express'));

var stu={"name":"ram",
"name" :"sam","name":"jack",
"name" :"jill"

};
//baseurl end point
app.get('/getStudents',(req,res)=>
{
    var students=['sam','ram','mack'];
    res.send('students are '+ stu);
})


app.get('/getStudent/:roll',(req,res)=>
{
    res.send('student roll no '+ req.params.roll);
})

app.post('/addStudent',(req,res)=>{
    var name = req.body.name;
    var age = req.body.age;
    res.send('student name '+name+' age is '+age);
});

app.delete('/deleteStudents/:age',(req,res)=>{
    res.send('roll nummber '+req.params.roll+' and age '+req.params.age);
});


app.put('/modifyStudents/:roll',(req,res)=>{
    res.send('roll nummber '+req.params.roll+'age is '+req.body.age);
});


app.listen(3003,()=>console.log('server is started'));