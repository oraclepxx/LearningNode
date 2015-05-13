/**
 * Created by xpan on 5/12/15.
 */

var http = require('http');

var data = '{"name": "Amour", "address": "12345 San Francisco Ave, CA, 94304"}';

var options = {
    hostname: 'localhost',
    port: '9999',
    method: 'PUT'
};

function readResponse(resp) {
    var result = '';
    resp.on('data', function (chunk) {
        result = result + chunk;
    });

    resp.on('end', function () {
        var respObj = JSON.parse(result);
        console.log(result);
        console.log(respObj.name);
        console.log(respObj.address);
    });
}


var req = http.request(options, function (resp) {
    readResponse(resp);
});

req.write(data);
req.end();
