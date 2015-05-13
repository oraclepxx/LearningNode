/**
 * Created by xinpan on 05/12/2015.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');

var filePath = '/Users/xinpan/Desktop/temp.txt';

var message = ['WebStorm', 'File', 'Edit', 'View', 'Navigate'];

var server = http.createServer(function (req, resp) {
    resp.write('<html><head><title>Test</title></head>');
    resp.write('<body><h1>');
    for (var idx in message) {
        resp.write(message[idx] + "/");
    }
    resp.write('</h1></body>');
    resp.end();
});

//var server = http.createServer(function (req, resp) {
//    fs.readFile(filePath, function (err, data) {
//        if (err) {
//            resp.write(err);
//        }
//        resp.write(data);
//        resp.end();
//    });
//});

server.listen(9999);
console.log('Listening port 9999');
