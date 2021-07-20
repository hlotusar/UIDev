var fs = require("fs");

var result = '';

var readerStream =fs.createReadStream('text1.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {   

    result += chunk;

});

readerStream.on('end',function(){

    console.log(result);

});

readerStream.on('error', function(err){

    console.log(err.stack);

});



console.log("Program Ended");