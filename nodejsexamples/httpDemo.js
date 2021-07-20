var http=require('http');
var server=http.createServer(function(request,response){
    response.writeHead(200,{'content-type': 'text/plain'})
    response.write('heelo from http module');
    response.end();
})
server.listen(3002);
console.log('server is started');