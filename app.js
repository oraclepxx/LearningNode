var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");
var eventproxy = require("eventproxy");

var app = express();

var url = require("url");
var cnodejsURL = "https://cnodejs.org";

app.get("/", function (req, resp, next) {

    //superagent.get("https://cnodejs.org").end(function (err, res) {
    //    if (err) {
    //        return next(err);
    //    }
    //
    //    var $ = cheerio.load(res.text);
    //    var items = [];
    //    $('#topic_list .topic_title').each(function (idx, element) {
    //        var $element = $(element);
    //        items.push({
    //            title: $element.attr('title'),
    //            href: $element.attr('href')
    //        });
    //    });
    //
    //    resp.send(items);
    //});

    superagent.get(cnodejsURL).end(function (err, res) {
        if (err) {
            console.error(err);
        }

        var $ = cheerio.load(res.text);
        var topicURLs = [];
        $('#topic_list .topic_title').each(function (index, element) {
            var $element = $(element);
            var href = url.resolve(cnodejsURL, $element.attr("href"));

            topicURLs.push(href);
        });

        console.log(topicURLs);

        var ep = new eventproxy();

        ep.after("topic_html", topicURLs.length, function (topics) {
            topics = topics.map(function (topicPair) {
                var tUrl = topicPair[0];
                var tHtml = topicPair[1];
                var $ = cheerio.load(tHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: tUrl,
                    comment1: $('.reply_content').eq(0).text().trim()
                });
            });

            console.log(topics);
        });

        topicURLs.forEach(function (topicURL) {
            superagent.get(topicURL).end(function (err, res) {
                if (err) {
                    console.error(err);
                }

                ep.emit("topic_html", [topicURL, res.text]);
            });
        });


    });


});

app.listen(3000, function () {
    console.log("Node is listening port 3000");
});