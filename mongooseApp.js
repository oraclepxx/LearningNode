/**
 * Created by xinpan on 04/28/2015.
 */

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test2");

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function (callback) {

    // define schema
    var kittySchema = mongoose.Schema({
        name: String
    });
    //
    //kittySchema.methods.speak = function () {
    //    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    //    return greeting;
    //}
    //
    //// define a class Kitten
    var Kitten = mongoose.model("Kitten", kittySchema);

    // instance of Kitten
    var green = new Kitten({name: "green"});
    //
    //console.log(jim.name);
    //console.log(jim.speak());
    ////console.log(jim.sayHi());
    //
    green.save(function (err, green) {
        if (err) {
            return console.error(err);
        }
    });
    //
    //var kate = new Kitten({name: "Kate"});
    //console.log(kate.name);
    //console.log(kate.speak());
    //
    //kate.save(function (err, kate) {
    //    if (err) {
    //        return console.error(err);
    //    }
    //});


    //Kitten.find(function (err, kittens) {
    //    if (err) {
    //        console.log(err);
    //    }
    //    console.log(kittens);
    //});

    //var Assignment = mongoose.model('Assignment', {dueDate: Date});
    //var date = new Assignment({dueDate: Date.now()});
    //console.log("dueDate is " + date.dueDate.getMonth());
    //
    //date.save(function (err, date) {
    //    if (err) {
    //        console.error(err);
    //    }
    //});

    //Assignment.find(function (err, assignments) {
    //    if (err) {
    //        console.error(err);
    //    }
    //
    //    console.log(assignments);
    //
    //    for (var i = 0; i < assignments.length; i++) {
    //        assignments[i].dueDate = Date.now();
    //        //assignments[i].markModified("dueDate");
    //        assignments[i].save(function (err) {
    //            if (err) {
    //                console.error(err);
    //            }
    //        });
    //    }
    //
    //    console.log("Changed..........");
    //    console.log(assignments);
    //
    //});


    //var dogSchema = mongoose.Schema({
    //    name: String,
    //    type: String,
    //    age: Number
    //});

    ////var Schema = mongoose.Schema;
    ////var dogSchema = new Schema({
    ////    name: String
    ////});
    //
    //var Dog = mongoose.model("Dog", dogSchema);
    //Dog.find(function (err, dogs) {
    //
    //    console.log(dogs);
    //
    //    for(var i = 0; i < dogs.length; i++){
    //        dogs[i].name = "Mr. " + dogs[i].name;
    //        dogs[i].type = "Dog_" + dogs[i].type;
    //        dogs[i].age = dogs[i].age + 1;
    //        dogs[i].save();
    //    }
    //
    //    console.log(dogs);
    //
    //});

    //var cool = new Dog({name: "Cool", type: "Hasky", age: 3});
    //
    //cool.save(function (err, cool) {
    //    if (err) {
    //        console.error(err);
    //    }
    //});

});
