// Import http library for connecting http 
var http = require('http');

// create an Server using http method
var server = http.createServer(function (request,response){

    // Get the result with response
    response.writeHead(200,{"content-type" : "text/plain"});
    // will display Hello World in browser console
    response.end("Hello World\n Welcome in Node");
});

server.listen(7000);