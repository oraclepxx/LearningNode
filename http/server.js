/**
 * Created by xpan on 5/12/15.
 */

var http = require('http');

var server = http.createServer(function (req, resp) {
    var jsonData = '';

    req.on('data', function (chunk) {
        jsonData = jsonData + chunk;
    });

    req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
        var requestObj = {
            name: "Hello " + reqObj.name,
            address: "Are you live at " + reqObj.address + " ?"
        }

        resp.write(JSON.stringify(requestObj));
        resp.end();
    });

});

server.listen(9999);
console.log("Listening 9999");
