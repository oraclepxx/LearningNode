/**
 * Created by xinpan on 04/28/2015.
 */

var jenkinsapi = require("jenkins-api");

var jenkins = jenkinsapi.init("http://localhost:4321");

jenkins.all_jobs(function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data);
});

var jobId = "testJob1";

//job info
jenkins.job_info(jobId, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data)
});

//last build info
jenkins.last_build_info(jobId, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data)
});

// last build report
jenkins.last_build_report(jobId, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data)
});

// get config.xml
jenkins.get_config_xml(jobId, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data)
});

// copy job
//jenkins.copy_job(jobId, "testJob2", function (config) {
//        // function which takes the config.xml, and returns
//        // the new config xml for the new job
//        return config.replace('development', 'feature-branch');
//    }, function (err, data) {
//        // if no error, job was copied
//        if (err) {
//            return console.log(err);
//        }
//        console.log(data)
//});

// delete job
jenkins.delete_job("testJob2", function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

//jenkins.computers(function (err, data) {
//    if (err) {
//        return console.log(err);
//    }
//    console.log(data)
//});


