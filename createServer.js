var net = require('net');

// create an server with net package

var server = net.createServer(function(socket){
    console.log("Connection From" + socket.remoteAddress);
    socket.end("Hello world");
});

server.listen(7200,"127.0.0.1");
