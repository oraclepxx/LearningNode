/**
 * Created by xpan on 5/12/15.
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');

function sendWeatherResp(wData, resp) {
    var page = '<html><head><title>Weather Map</title></head>' +
        '<body>' +
        '<form method = "post">' +
        'City: <input name="city"><br><br>' +
        '<input type="submit" value="Show me weather">' +
        '</form>';

    if (wData) {
        page = page + '<h1>Weather Information</h1><p>' + wData + '</p>'
    }

    page = page + '</body></html>';

    resp.end(page);
}

function parseWeather(wResp, resp) {
    var wData = '';
    wResp.on('data', function (chunk) {
        wData = wData + chunk;
    });

    wResp.on('end', function () {
        sendWeatherResp(wData, resp);
    });
}

function getWeather(city, resp) {
    var options = {
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + city
    };

    var req = http.request(options, function (weatherResp) {
        parseWeather(weatherResp, resp);
    });

    req.end();
}

var server = http.createServer(function (req, resp) {
    if (req.method === 'POST') {
        var reqData = '';
        req.on('data', function (chunk) {
            reqData = reqData + chunk;
        });

        req.on('end', function () {
            console.log(reqData);
            var param = querystring.parse(reqData);
            getWeather(param.city, resp);
        });
    } else {
        sendWeatherResp(null, resp);
    }
});

server.listen(9999);
console.log('Listening 9999');

