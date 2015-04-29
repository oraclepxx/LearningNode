/**
 * Created by xinpan on 04/29/2015.
 */

var jenkins = require("jenkins");

var jenkins = jenkins("http://localhost:4321");

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


//jenkinsClient.info(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//    console.log('info', data);
//});


//jenkinsClient.build.get('testJob1', 3, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('build', data);
//});

//jenkinsClient.build.log('testJob1', 3, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('buildLog', data);
//});


//jenkinsClient.job.build('testJob1', function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

//jenkinsClient.build.stop('testJob1', 5, function (err) {
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

jenkins.node.list(function(err, data) {
    if (err) {
        console.error(err);
    }

    console.log('nodes', data);
});