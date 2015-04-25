var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");

var app = express();

app.get("/", function (req, resp, next) {

    superagent.get("https://cnodejs.org").end(function (err, res) {
        if (err) {
            return next(err);
        }

        var $ = cheerio.load(res.text);
        var items = [];
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });

        resp.send(items);
    });

});