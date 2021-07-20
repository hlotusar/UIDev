var express = require('express');
const app = express();
var cors=require('cors');
const mongoose = require('mongoose');
app.use(cors());
const url = 'mongodb://localhost:27017/trainingdb';


var bookSchema = mongoose.Schema({
    bookid: Number,
    bookName: String,
    authorName: String,
    publishedDate: { type: Date, default: Date.now },
    price: Number
}, { collection: 'booksinfo' });

const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.get('/', (req, res) => {
    res.send('server started');
})
const bookModel = mongoose.model('booksinfo', bookSchema);

app.get('/getBooks', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) console.log(err);
        else console.log('connected getbooks');
    })

    bookModel.find({}, function (err, books) {
        if (err) console.log(err);
        else {
            console.log(books);
            res.send(books)
        }
    })

});

app.post('/addBook', (req, resp) => {
    var bookid = req.body.bookid;
    var bookName = req.body.bookName;
    var authorName = req.body.authorName;
    var publishedDate = req.body.publishedDate;
    var price = req.body.price;
    var book = new bookModel({ bookid: bookid, bookName: bookName, authorName: authorName, publishedDate: publishedDate, price: price })
    mongoose.connect(url, function (err) {
        if (err) console.log(err);
        else console.log('connected post add book');
    })


    book.save(function (err) {

        if (err) console.log(err)

        else {

            console.log('bookinfo Inserted')
            resp.send(book);
        }

    })
})


app.listen(3005, console.log("server started"));