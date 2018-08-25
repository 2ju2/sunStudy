//모듈을 추출합니다.

var http = require('http');
var fs = require('fs');
var jade = require('jade');
 
http.createServer(function (request, response) {
    //JadePage.jade 파일을 읽습니다.       
    fs.readFile('JadePage7-16.jade', 'utf-8', function(error, data){
        //jade 모듈을 사용합니다.
        var fn = jade.compile(data);
        //출력합니다.
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(fn());
    });
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

