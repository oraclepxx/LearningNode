/**
 * Created by xinpan on 05/12/2015.
 */

var http = require('http');

var fileLoc = 'http://localhost:4321/job/nodeJob2/ws/junit/TEST-Asuite.xml';

var options = {
    hostname: 'localhost',
    port: '4321',
    path: '/job/nodeJob2/ws/junit/TEST-Asuite.xml'
};

function handleResponse(resp) {
    var result = '';
    resp.on('data', function (err, chunk) {
        if (err) {
            console.error(err);
        }

        result = result + chunk;
    });

    resp.on('end', function () {
        console.log('result: ' + result);
    });
}


var req = http.request(options, function (resp) {
    handleResponse(resp);
});

req.end();


