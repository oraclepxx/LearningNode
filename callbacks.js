/**
 * Created by xinpan on 05/08/2015.
 */

// closure
//function logCar(message, callback) {
//    process.nextTick(function () {
//        callback(message);
//    });
//};
//
//var cars = ['Bugatti', 'Lamborghini', 'Porsche'];
//
//for (var idx in cars) {
//    var car = cars[idx];
//    logCar(car, function () {
//        console.log('Normal callback: ' + car);
//    });
//}
//
//for (var idx in cars) {
//    var car = cars[idx];
//    function show(message) {
//        logCar(message, function () {
//            console.log('Closure callback: ' + message);
//        });
//    };
//    show(car);
//}

// chain callback
var cars = ['Bugatti', 'Lamborghini', 'Porsche', 'Aston Martin', 'Ferrari'];
function logCar(car, callback) {
    console.log('Logging: ' + car);
    if (cars.length > 0) {
        process.nextTick(function () {
            callback();
        });
    }

}

function logCars(cars) {
    var car = cars.pop();
    logCar(car, function () {
        logCars(cars);
    });
}

logCars(cars);



