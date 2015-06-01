var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sender('index');
});

app.get('/time', function (req, res) {
    var date = new Date();
    res.send(date);
});

app.listen(3000);
