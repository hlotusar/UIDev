//example of duplex stream

var fs=require('fs');
var net=require('net');
//socket parameter is used to communicate with client
net.createServer(function(socket){
    console.log('client is connected');
    socket.write('go ahead and type something');
    socket.on('readable',function(){
        process.stdout.write(this.read())
    });
})

.listen(8081,()=>console.log('server started'));