/**
 * Created by xpan on 5/9/15.
 */

var fs = require('fs');

var filePath = '/Users/xpan/Desktop/temp.txt';

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

var data = JSON.stringify(address);
var options = {encoding: 'utf8', flag: 'w'};

fs.writeFile(filePath, data, options, function (err) {
    if (err) {
        console.error(err);
    }
    console.log('File saved.');
});

