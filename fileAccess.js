/**
 * Created by xpan on 5/9/15.
 */

var fs = require('fs');
var path = require('path');
var http = require('http');

var filePath = '/Users/xinpan/Desktop/temp.txt';
var newFilePath = '/Users/xinpan/Desktop/temp1.txt';

var dirPath = '/Users/xinpan/Desktop/wsdl';

//fs.open(filePath, 'r', function (err, fd) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('File opened.');
//
//    fs.close(fd, function () {
//        console.log('File closed');
//    });
//});

var address = {
    street: '3303 Hillview Ave',
    city: 'Palo Alto',
    state: 'CA',
    zipcode: 94087
};

//var data = JSON.stringify(address);
var options = {encoding: 'utf8', flag: 'r+'};

//fs.writeFile(filePath, data, options, function (err) {
//    if (err) {
//        console.error(err);
//    }
//    console.log('File saved.');
//});

//fs.readFile(filePath, options, function(err, data){
//    if(err){
//        console.log(err);
//    }
//
//    console.log(JSON.parse(data));
//});

//var fd = fs.openSync(filePath, 'r+');
//var contents = '';
//
//do {
//    var buf = new Buffer(5);
//    buf.fill();
//    var bytes = fs.readSync(fd, buf, null, 5);
//    contents = contents + buf.toString();
//} while (bytes > 0);
//
//fs.closeSync(fd);
//console.log(contents);

function showDirFiles(dirPath) {
    fs.readdir(dirPath, function (err, entries) {
        if (err) {
            console.error(err);
        }
        for (var idx in entries) {
            var entry = entries[idx];
            var fullPath = path.join(dirPath, entry);
            showFile(fullPath);
        }
    });
};

function showFile(filePath) {
    fs.stat(filePath, function (err, stat) {
        if (err) {
            console.error(err);
        }
        if (stat) {
            if (stat.isFile()) {
                console.log(filePath);
            } else if (stat.isDirectory()) {
                showDirFiles(filePath);
            }
        }

    });
};

showDirFiles(dirPath);



http.createClient(function(req, resp){

}).listen(filePath, function(){

});
