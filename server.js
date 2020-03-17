var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static('static'))
app.use('/data', express.static('data'))
app.use('/maps', express.static('maps'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);