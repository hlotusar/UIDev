var fs=require('fs');
var file =fs.createReadStream('strfile.txt');
var newFile=fs.createWriteStream("text1.txt");

file.pipe(newFile);
newFile.on('close',function(){
    console.log("file has been copied");
})