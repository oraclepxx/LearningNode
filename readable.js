/**
 * Created by xinpan on 05/08/2015.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Address, stream.Readable);

function Address(opt) {

    stream.Readable.call(this, opt);
    this.details = "3303 Hillview Ave, Palo Alto, CA, 94304";
};

Address.prototype._read = function () {
    this.push(this.details);
};

var addr = new Address();
console.log(addr.read());

addr.on('data', function (data) {
    console.log(data.toString());
});

addr.on('end', function (data) {
    console.log("Done.  " + data);
});


