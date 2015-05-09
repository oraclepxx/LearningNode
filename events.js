/**
 * Created by xinpan on 05/08/2015.
 */

setInterval(function () {
    console.log("setImmediate()");
}, 1000);

setImmediate(function(){
   console.log("1111");
});

setImmediate(function(){
    console.log("2222");
});

setImmediate(function(){
    console.log("3333");
});

process.nextTick(function () {
    console.log("haha");
});

process.nextTick(function () {
    console.log("hahhahaha");
});