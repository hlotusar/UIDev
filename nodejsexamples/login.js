var express = require('express');
var app = express();

var parser = require('body-parser');
//const bodyParser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loginForm.html');
})

// app.post('/login', (req, res) => {
//     if(req.params.username == 'tusar' && req.params.pwd=='12345')
//     {
//         res.send('login successful');
//     }
//     else{res.send('wrong username or password'+req.params.username );}

// })

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    if(username == 'tusar' && password=='12345')
    {
        res.send('login successful');
    }
    else{res.send('wrong username or password' );}
});


app.listen(3003, console.log("server started"));