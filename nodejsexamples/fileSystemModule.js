var fs = require('fs');
var myString = '{"name":"node js leaerning"}';

fs.writeFile('myfile.json', myString, (err) => {
    if (err) { console.log(err); }
    else { console.log('file has not been written'); }
});
console.log('fie writing is done')

var str = "Node JS learning";
fs.writeFile('strfile.txt', str, (err) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log("written successfully");
    }
})

fs.readFile('strfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log(data);
    }
})

fs.readdir('C:\Users\tusarjyoti.das\source\repos\UIDev\nodejsexamples', (err, data) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log(data);
    }
});