var blueBird=require('bluebird');
var fs =require('fs');
blueBird.promisifyAll(fs);
fs.readFileAsync('strfile.txt')
.then((data)=>console.log('data from the files = '+ data))
.catch((err)=>console.log(err));