//모듈을 추출합니다.

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
 
http.createServer(function (request, response) {
    response.writeHead(200, { 'content-Type': 'text/html'});
    response.end('<h1>Hello Juhee World..!</h1>')
}).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});
