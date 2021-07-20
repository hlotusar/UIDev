var fs=require('fs');
var zlib=require('zlib');
var rstream=fs.createReadStream('text1.txt.gz');
var wstream=fs.createWriteStream('txt1.txt');
var gzip=zlib.createGzip();
rstream.pipe(gzip).pipe(wstream).on('finish', function(){
    console.log('unzipping finished');
});