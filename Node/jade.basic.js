//모듈을 추출합니다.

var http = require('http');
var fs = require('fs');
var jade = require('jade');
 
http.createServer(function (request, response) {
    fs.readFile('JadePage.jade', 'utf8', function(error, data) {
        
    });
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

