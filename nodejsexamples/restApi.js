var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'trainingdb';

var express = require('express');
var bodyParser = require('body-parser');
var cors=require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send("express server started"));

//endpoint for fetching of student details
app.get('/getStudents', (req, resp) => {
    mongodb.MongoClient.connect(url, (err, connection) => {
        if (err) console.log(err);
        else {
            const db = connection.db(dbName);
            db.collection('student')
                .find()
                .toArray((err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        resp.send(result);
                        
                    }
                })
        }
        connection.close();
    })
})

app.post('/addStudent', (req, resp) => {
    mongodb.MongoClient.connect(url, (err, connection) => {
        var name = req.body.name;
        var age = req.body.age;
        var location = req.body.location;
        const db = connection.db(dbName);
        if (err) console.log(err);
        else {
            db.collection('student')
                .insertOne({ name: name, age: age, location: location });
        }

        resp.send('document inserted suucessfully');
        connection.close();
    })
})

//invalid post

app.post('/addStudent/:name', (req, resp) => {
    resp.statusCode = 403;
    resp.send('operation invalid');
})


app.get('/getStudent/:name', (req, resp) => {

    var name = req.params.name;
    mongodb.MongoClient.connect(url, (err, connection) => {
        if (err) console.log(err);
        else {
            const db = connection.db(dbName);
            db.collection('student')
                .find({ name: name })
                .toArray((err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        resp.send(result);
                    }
                })
        }
        connection.close();
    })
})

app.put('/modifyStudent', (req, resp) => {
    resp.statusCode = 403;
    resp.send('operation invalid');
})


app.put('/modifyStudent/:name', (req, resp) => {
    var name = req.params.name;
    var location = req.body.location;
    mongoClient.connect(url, (err, connection) => {
        if (err) console.log(err)
        else {
            var db = connection.db(dbName);
            db.collection('student')
                .updateOne({ name: name }, { $set: { location: location } }, (err, res) => {
                    if (err) console.log(err);
                    else resp.send("1 document updated");
                })
        }
        connection.close();

    })
})

app.get('/getStudent/:age/:location', (req, resp) => {


    mongodb.MongoClient.connect(url, (err, connection) => {
        if (err) console.log(err);
        else {
            var _age = parseInt(req.params.age);
            var location = req.params.location;
            console.log(_age + '' + location);
            const db = connection.db(dbName);
            db.collection('student')
                .find({$or:[{age:_age},{location:location}]})
                .toArray((err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        resp.send(result);
                    }
                })
        }
        connection.close();
    })
})


app.delete('/deletestudents/:location', (req, resp) => {
    mongodb.MongoClient.connect(url, (err, connection) => {
        if (err) console.log(err);
        else {
            var location = req.params.location;
            var db = connection.db(dbName);
            db.collection('student').deleteMany({ location: location }, (err, res) => {
                if (err) console.log(err);
                else resp.send(" document deleted :" + res.deletedCount);
            })
        }

        connection.close();
    })
})

app.delete('/deletestudents', (req, resp) => {
    mongoClient.connect(url, (err, connection) => {
        if (err) console.log(err);
        else {
            var db = connection.db(dbName);
            db.collection('student').deleteMany({}, (err, res) => {
                if (err) console.log(err);
                else resp.send(" document deleted :" + res.deletedCount);
            })
        }
        connection.close();
    })
})



app.listen(3001, () => console.log('server is started at 3001'))