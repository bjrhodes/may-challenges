var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var fs = require("fs");

var host = "http://localhost:8080";

var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add endpoints /analytics and /newsletter
// document endpoints

app.post('/analytics', function(req, res) {
    var log,
        logfile = __dirname + '/storage/analytics.json';

    // @todo - input validation

    try {
        // @todo - lol wut. Who reads a log file. make this more append-y
        log = JSON.parse(fs.readFileSync(logfile, "utf8"));
    } catch (err) {
        console.log(err);
        log = [];
    }
    log.push({url: req.body.url, time: new Date().toLocaleTimeString()});
    fs.writeFile(logfile, JSON.stringify(log), function() {
        //do nothing
    });

    // @todo error handling
    return res.json({status: "Visit logged"});
});

app.post('/newsletter', function(req, res) {
    var log,
        logfile = __dirname + '/storage/newsletter.json';

    // @todo - input validation

    try {
        // @todo - lol wut. Who reads a log file. make this more append-y
        log = JSON.parse(fs.readFileSync(logfile, "utf8"));
    } catch (err) {
        console.log(err);
        log = [];
    }
    log.push({name: req.body.name, email: req.body.email});
    fs.writeFile(logfile, JSON.stringify(log), function() {
        //do nothing
    });

    // @todo error handling
    return res.json({status: "User signed up"});
});

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');