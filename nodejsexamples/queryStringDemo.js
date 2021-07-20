var http=require('http');
var url=require('url');
var server=http.createServer(function(request,response){
    
    response.write('hello from http module');
    response.end();
    queryString=url.parse(request.url,true).query;
    console.log(queryString);
})
server.listen(3002);
console.log('server is started');