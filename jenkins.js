/**
 * Created by xinpan on 04/29/2015.
 */

var jenkins = require('jenkins');
var http = require('http');
var libxmljs = require("libxmljs");

// Non auth
//var jenkins = jenkins("http://localhost:4321");

// user/pass auth
var jenkins = jenkins("http://admin:admin@localhost:4321");


//var configTemplate = "<?xml version='1.0' encoding='UTF-8'?>" +
//    "<project>" +
//    "<actions/>" +
//    "<description>create a new job.</description>" +
//    "<keepDependencies>false</keepDependencies>" +
//    "<properties/>" +
//    "<scm class='hudson.scm.NullSCM'/>" +
//    "<canRoam>true</canRoam>" +
//    "<disabled>false</disabled>" +
//    "<blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>" +
//    "<blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>" +
//    "<triggers/>" +
//    "<concurrentBuild>false</concurrentBuild>" +
//    "<builders/>" +
//    "<publishers/>" +
//    "<buildWrappers/>" +
//    "</project>";
//
//
//jenkins.info(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//    console.log('info', data);
//});
//
//
//jenkins.build.get('testJob1', 3, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('build', data);
//});
//
//jenkins.build.log('nodeJob2', 38, function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('buildLog', data);
//});
//
//
//jenkins.build.stop('testJob1', 5, function (err) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//jenkins.job.config('nodeJob2', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('xml', data);
//});
//
//jenkins.job.enable('nodeJob2', function (err) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//function getJobUrl(jobName, jobUrl) {
//    jobUrl = jenkins.job.get(jobName, function (err, data, jobUrl) {
//        if (err) {
//            console.error(err);
//        }
//        //console.log(data);
//
//        for (var attr in data) {
//            if ('url' == attr) {
//                jobUrl = data[attr];
//                console.log("jobUrl: " + jobUrl);
//                return jobUrl;
//            }
//        }
//
//    });
//    return jobUrl;
//}
//
//
//var jobURL = getJobUrl("nodeJob2");
//console.log(jobURL);
//
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
//
//jenkins.job.create(jobName, configTemplate, function (err) {
//
//    if (err) {
//        console.error(err);
//    }
//});
//
//jenkins.job.destroy("testJob3", function (err) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//jenkins.job.exists('newCreateJob1', function (err, exists) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('exists', exists);
//});
//
//
//jenkins.job.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('jobs', data);
//});
//
//
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
//
//jenkins.node.list(function(err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('nodes', data);
//});
//
//jenkins.queue.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('queues', data);
//});
//
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
//
//jenkins.view.list(function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//
//    console.log('views', data);
//});
//
//jenkins.view.destroy("testView", function (err) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//jenkins.view.add('testView', 'job1', function (err) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//jenkins.job.build('nodeJob2', function (err) {
//    if (err) {
//        console.error(err);
//    }
//});

jenkins.job.get('nodeJob2', function (err, data) {
    if (err) {
        console.error(err);
    }

    //console.log(data);
    var reportLoc = "";
    for (var attr in data) {
        if ('url' == attr) {
            reportLoc = data[attr];
            break;
        }
    }

    reportLoc = reportLoc + 'ws/';

    jenkins.job.config('nodeJob2', function (err, data) {
        if (err) {
            console.error(err);
        }

        var configDoc = libxmljs.parseXml(data);
        var testResult = configDoc.get('publishers/hudson.tasks.junit.JUnitResultArchiver/testResults');

        reportLoc = reportLoc + testResult.text();

        console.log("reportLoc:" + reportLoc);

        http.get(reportLoc, function (response) {
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });

            response.on('end', function () {
                //console.log(body);

                var xmlBody = '<?xml version="1.0" encoding="UTF-8" ?>' +

                    '<testsuites>' +
                        '<testsuite name="A suite" errors="2" tests="5" failures="2" time="0.005" timestamp="Thu May 07 2015 11:13:06 GMT-0700 (PDT)">' +
                            '<testcase assertions="0" classname="A suite" name="contains specs with an expectation" time="0.001">' +
                                '<failure><![CDATA[Expected true to be false.]]></failure>' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="A suite" name="and so is a specs" time="0">' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="A suite" name="and has a positive case" time="0">' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="A suite" name="and can have a negative case" time="0">' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="A suite" name="test number" time="0.001">' +
                                '<failure><![CDATA[Expected 3 to be 4.]]></failure>' +
                            '</testcase>' +
                        '</testsuite>' +
                        '<testsuite name="B suite" errors="2" tests="3" failures="1" time="0.005" timestamp="Thu May 07 2015 11:13:06 GMT-0700 (PDT)">' +
                            '<testcase assertions="0" classname="B suite" name="and so is a specs" time="0">' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="B suite" name="and can have a negative case" time="0">' +
                            '</testcase>' +
                            '<testcase assertions="0" classname="B suite" name="test number" time="0.001">' +
                                '<failure><![CDATA[Expected 11 to be 4.]]></failure>' +
                            '</testcase>' +
                        '</testsuite>' +
                    '</testsuites>';


                var testDoc = libxmljs.parseXml(xmlBody);
                var suite = testDoc.get('//testsuites');
                var suites = suite.childNodes();

                for (var index in suites) {
                    var ts = suites[index];
                    var testName = ts.attr('name').value();
                    var tests = ts.attr('tests').value();
                    var failures = ts.attr('failures').value();
                    var passes = tests - failures;

                    console.log("========================");
                    console.log("Testsuite: " + testName);
                    console.log("Tests: " + tests);
                    console.log("Passes: " + passes);
                    console.log("Failures: " + failures);

                    var cases = ts.childNodes();

                    for (var index in cases) {
                        var caseItem = cases[index];
                        var caseFailures = caseItem.childNodes();
                        if (caseFailures.length > 0) {
                            for (var index in caseFailures) {
                                var failure = caseFailures[index];
                                console.log('CausedBy: '+ caseItem.attr('classname').value() + '-' + caseItem.attr('name').value());
                                console.log(failure.text());

                            }
                        }

                    }
                }

            });

        });

    });



});
