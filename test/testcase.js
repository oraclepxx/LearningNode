/**
 * Created by xinpan on 04/27/2015.
 */

function foo(n) {
    if (n == 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return foo(n - 1) + foo(n - 2);

};

//if (require.main === module) {
//    var n = Number(process.argv[2]);
//    console.log('foo(' + n + ') is', foo(n));
//}

exports.foo = foo;