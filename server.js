var newrelic = require('newrelic');
var bugsnag = require('bugsnag');
bugsnag.register('c1504349bc18b8e0a6ab642df05d5b1a');
var app = require('express').createServer();
app.use(bugsnag.requestHandler);
app.get('/', function (req, res) {
    res.send("<html>" +
        "<head>" +
        "<title>Um</title>" +
        "<script src='//d2wy8f7a9ursnm.cloudfront.net/bugsnag-2.min.js\' data-apikey='c1504349bc18b8e0a6ab642df05d5b1a'></script>" +
        "<!--<script>console.log('Cast exception: ' + windows.alert());</script>-->" +
        "<!--<script>Bugsnag.notify('RandomException', 'Just felt like throwing an exception.');</script>-->" +
        "</head>" +
        "<body><h1>Hello World!</h1></body>" +
        "</html>");
});
app.get('/throw_error', function (req, res) {
    var emptyVar = null;
    emptyVar.emptyFunc();
    res.send("Will not come here");
});
app.use(bugsnag.errorHandler);
app.listen(80);
