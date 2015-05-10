/**
 * Created by xpan on 5/9/15.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Reader, stream.Readable);
util.inherits(Writer, stream.Writable);

function Reader(opt) {
    stream.Readable.call(this, opt);
    this.index = 1;
}

Reader.prototype._read = function (data, encoding, callback) {
    var idx = this.index;
    if (idx > 10) {
        this.push(null);
    } else {
        this.push("Item" + idx);
        this.index++;
    }
};

function Writer(opt) {
    stream.Writable.call(this, opt);
    this.index = 1;
}

Writer.prototype._write = function (data, encoding, callback) {
    console.log(data.toString());
    callback();
};

var reader = new Reader();
var writer = new Writer();

reader.pipe(writer);

