/**
 * Created by xinpan on 04/27/2015.
 */

var express = require("express");
var async = require("async");

var app = express();

var urls = [];
for (var i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i);
}

var concurrencyCount = 0;

var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log("The current count is", concurrencyCount, "，Fetching from", url, "，cost: " + delay + "ms");

    setTimeout(function () {
        concurrencyCount--;
        callback(null, url);
    }, delay);

};

async.mapLimit(urls, 8, function (url, callback) {
        fetchUrl(url, callback);
    },
    function (err, result) {
        console.log(result);
    });
