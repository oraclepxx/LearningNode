/**
 * Created by xinpan on 04/27/2015.
 */
var fs = require("fs");

function copy(src, dest){
    fs.writeFileSync(dest, fs.readFileSync(src));
}


copy("/Users/xinpan/Desktop/test.xml", "/Users/xinpan/Desktop/test1.xml");