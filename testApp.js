/**
 * Created by xinpan on 04/27/2015.
 */

var foo = require("./test/testcase");
var should = require("should");


//describe("./test/testcase", function () {
//    it("should equal 55 when n === 10", function () {
//        foo.foo(10).should.equal(55);
//    });
//
//});

var fs = require("fs");

function copy(src, dest){
    fs.writeFileSync(dest, fs.readFileSync(src));
}