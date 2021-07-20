var express = require('express');
const app = express();
const mongoose = require('mongoose');
//const popup = require('popups');
var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    password: String
}, { collection: 'users' });
const parser = require('body-parser');
const { response } = require('express');

app.use(parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.post('/login', (req, res) => {
    mongoose.connect('mongodb://localhost:27017/trainingdb', function (err) {
        if (err) console.log(err);
        else console.log('connected');
    })
    var username = req.body.username;
    var _password = req.body.password;

    var User = mongoose.model('user', userSchema);
    User.findOne({ name: username }, function (err, data) {
        if (err) console.log(err);
        else {
            if (data == null) { res.send("user does not exist, register please...!!!"); }
            if (data.password == _password) {
                res.send('login successful');
            }
            else { res.send('wrong username or password'); }
        }

    })
    // Insert Login Code Here

});

app.post('/register', (req, res) => {

    var username = req.body.username;
    var _password = req.body.password;
    var confirm_password = req.body.confirm_password;
    var age = req.body.age;
    confirmPassword(_password, confirm_password)
        .then((response) => {
            mongoose.connect('mongodb://localhost:27017/trainingdb', function (err) {
                if (err) console.log(err);
                else console.log('connected');


            });

            var User = mongoose.model('user', userSchema);
            User.findOne({ name: username }, function (err, data) {
                if (err) console.log(err);

                else {
                    if (data == null) {
                        var user2 = new User({ name: username, password: _password, age: age });
                        user2.save(function (err) {

                            if (err) {
                                console.log(err);
                                res.sendFile(__dirname + '/register.html')
                            }

                            else {
                                res.send("user inserted");

                            }
                            console.log('Document Inserted')
                        })

                    }

                    else {
                        // popup.alert({
                        //     content: 'user exists'
                        // });
                        res.send("user exists..please login...!!!");
                    }
                }




            })
        })
        .catch((err) => {
            res.sendFile(__dirname + '/register.html');
        })
   
});
function confirmPassword(password, confirmPassword) {
    return new Promise((resolve, reject) => {
        if (password == confirmPassword) {
            resolve(password)
        }
        else {
            reject('passwords dont match');
        }
    })
}
app.listen(3005, console.log("server started"));