var fs=require('fs');
var writeString='Hello World...!! from stream write4';
var writer=fs.createWriteStream('strfile.txt');
//writer.setEncoding('UTF8');
writer.write(writeString);

writer.on('close',function(){

    console.log('file closed');

})