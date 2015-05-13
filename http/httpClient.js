/**
 * Created by xinpan on 05/12/2015.
 */

var http = require('http');

//var fileLoc = 'http://localhost:4321/job/nodeJob2/ws/junit/TEST-Asuite.xml';

var options = {
    hostname: 'localhost',
    port: '9999',
    method: 'GET'
};

function handleResponse(resp) {
    var result = "";
    resp.on('data', function (err, chunk) {
        if (err) {
            console.error(err);
        }

        result = result + chunk;
    });

    resp.on('end', function () {
        console.log('resp status: ' + resp.statusCode);
        console.log('resp header: ' + resp.headers);
        console.log('result: ' + result.toString());
    });
}


var req = http.request(options, function (resp) {
    handleResponse(resp);
});

req.end();


