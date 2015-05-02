/**
 * Created by xinpan on 04/29/2015.
 */

var jenkins = require("jenkins");

// Non auth
//var jenkins = jenkins("http://localhost:4321");

// user/pass auth
var jenkins = jenkins("http://admin:admin@localhost:4321");


var configTemplate = "<?xml version='1.0' encoding='UTF-8'?>" +
    "<project>" +
    "<actions/>" +
    "<description>create a new job.</description>" +
    "<keepDependencies>false</keepDependencies>" +
    "<properties/>" +
    "<scm class='hudson.scm.NullSCM'/>" +
    "<canRoam>true</canRoam>" +
    "<disabled>false</disabled>" +
    "<blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>" +
    "<blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>" +
    "<triggers/>" +
    "<concurrentBuild>false</concurrentBuild>" +
    "<builders/>" +
    "<publishers/>" +
    "<buildWrappers/>" +
    "</project>";


//jenkins.info(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//    console.log('info', data);
//});


//jenkins.build.get('testJob1', 3, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('build', data);
//});

//jenkins.build.log('nodeJob2', 38, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('buildLog', data);
//});


jenkins.job.build('nodeJob2', function (err) {
    if (err) {
        console.error(err);
    }
});

//jenkins.build.stop('testJob1', 5, function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

//jenkins.job.config('testJob2', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('xml', data);
//});

//jenkins.job.config("testJob2", configTemplate, function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

//var jobName = "newCreateJob";
//
//var valid = jenkins.job.exists(jobName, function (err, exists) {
//    if (err) {
//        console.error(err);
//    }
//
//    return exists;
//});
//
//if (!valid) {
//    jobName = jobName + "_1";
//}

//jenkins.job.create(jobName, configTemplate, function (err) {
//
//    if (err) {
//        console.error(err);
//    }
//});

//jenkins.job.destroy("testJob3", function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

//jenkins.job.exists('newCreateJob1', function (err, exists) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('exists', exists);
//});


//jenkins.job.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('jobs', data);
//});


//jenkins.node.exists('master', function (err, exists) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('exists', exists);
//});
//
//jenkins.node.get('master', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('node', data);
//});

//jenkins.node.list(function(err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('nodes', data);
//});

//jenkins.queue.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('queues', data);
//});

//jenkins.view.exists('All', function (err, exists) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('exists', exists);
//});
//
//jenkins.view.get("testView", function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log(data);
//});

//jenkins.view.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('views', data);
//});

//jenkins.view.destroy("testView", function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

//jenkins.view.add('testView', 'job1', function (err) {
//    if (err) {
//        console.error(err);
//    }
//});