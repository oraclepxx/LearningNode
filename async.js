/**
 * Created by xinpan on 05/05/2015.
 */

function asyncFunction(arg, callback) {
    console.log("Handling " + arg);
    setTimeout(function () {
        callback(arg * 2);
    }, 2000);
}

function final() {
    console.log("All Done. " + results);
}

var items = [];
var results = [];

for (var i = 1; i <= 30; i++) {
    items.push(i);
}


/*
 //  serise
 function serise(item) {
 if (item) {
 asyncFunction(item, function (result) {
 results.push(result);
 return serise(items.shift());
 });

 } else {
 return final();
 }
 }

 serise(items.shift());
 */


/*
 // full parallel
 items.forEach(function (item) {
 asyncFunction(item, function (result) {
 results.push(result);
 if (results.length == items.length) {
 return final();
 }
 });
 });
 */

// limited parallel
var running = 0;
var max = 3;

function go() {
    while (running < max && items.length > 0) {
        var item = items.shift();
        asyncFunction(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                go();
            } else if (running == 0) {
                return final();
            }
        });

        running++;
    }
}

go();
