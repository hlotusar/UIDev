var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=='/')
    {
        res.write('hello from nodejs server');
        res.end()
    }
    else if(req.url=='/name')
    {
        res.write('tusar');
        res.end();
    }
    else if(req.url=='/company')
    {
        res.write('accenture');
        res.end();
    }
    else{
        res.write('invalid url');
        res.end();
    }

    
});
server.listen(3002);
console.log('server has been started');