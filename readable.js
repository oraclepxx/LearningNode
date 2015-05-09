/**
 * Created by xinpan on 05/08/2015.
 */

var stream = require('stream');
var util = require('util');

//util.inherits(Reader, stream.Readable);
//
//function Reader(opt) {
//
//    stream.Readable.call(this, opt);
//    this.data = "3303 Hillview Ave, Palo Alto, CA, 94304";
//};
//
//Reader.prototype._read = function () {
//    this.push(this.data);
//};
//
//var reader = new Reader();
//console.log(reader.read());
//
//reader.on('data', function (data) {
//    console.log(data.toString());
//});
//
//reader.on('end', function (data) {
//    console.log("Done.  " + data);
//});


util.inherits(Writer, stream.Writable);

function Writer(opt) {
    stream.Writable.call(this);
    this.data = new Array();
};

Writer.prototype._write = function (chunk, encoding, callback) {
    if (chunk != 'Done') {
        this.data.push(chunk);
    }
    console.log('Writing data ' + chunk);
    callback();
};

var writer = new Writer();
for (var i = 1; i <= 5; i++) {
    var item = 'Item' + i;
    writer.write(item, 'utf8');
}

writer.end('Done.');
console.log(writer.data);

