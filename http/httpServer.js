/**
 * Created by xinpan on 05/12/2015.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');

var filePath = '/Users/xinpan/Desktop/temp.txt';

var server = http.createServer(function (req, resp) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            resp.write(err);
        }
        resp.write(data);
        resp.end();
    });
});

server.listen(9999);
console.log('Listening port 9999');
