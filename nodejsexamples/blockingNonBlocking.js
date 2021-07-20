var fs = require("fs");

// var data = fs.readFileSync('strfile.txt');

// console.log(data.toString());

// console.log("Program Ended");
fs.readFile('strfile.txt',
    function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });
console.log("Program Ended");

