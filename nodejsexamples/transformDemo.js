// var fs=require('fs');
// var zlib=require('zlib');
// var gzip=zlib.createGzip();
// var rstream=fs.createReadStream('text1.txt');
// var wstream=fs.createWriteStream('text1.txt.gz');

// rstream.pipe(gzip).pipe(wstream).on('finish', function(){
//     console.log('zipping finished');
// });

var fs = require('fs');

var zlib = require('zlib');



var gzip = zlib.createGzip();

var rstream = fs.createReadStream('text1.txt');

var wstream = fs.createWriteStream('text1.txt.gz');



rstream  

  .pipe(gzip)

  .pipe(wstream) 

  .on('finish', function () { 

    console.log('done compressing');

  });