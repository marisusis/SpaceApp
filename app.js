var express = require('express')();
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var path    = require('path');

server.listen(8080);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


