var http = require("http");

/**
 * Create an Simple Server
 */
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type': "text/plain"});
    response.end('Hello World');
});