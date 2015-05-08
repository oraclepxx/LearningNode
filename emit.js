/**
 * Created by xinpan on 05/06/2015.
 */

var events = require('events')

var EventEmitter = events.EventEmitter;

var eventEmitter = new EventEmitter();

eventEmitter.emit('error');
eventEmitter.on('send', function (name) {
    console.log("send it. " + name);
});

eventEmitter.addListener('print', function () {
    console.log("print listener invoked");
});

//eventEmitter.on('print', function (name) {
//    console.log("print it. " + name);
//});

//setInterval(function () {
//    eventEmitter.emit('print');
//}, 1000);

//eventEmitter.emit('send', "Jim");

eventEmitter.emit('print');

eventEmitter.removeListener('print', function () {
    console.log('print listener removed')
});
