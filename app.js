var express = require('express'),
    app     = express(),
    server  = require('http').Server(app);
    io      = require('socket.io'),
    path    = require('path');

server.listen(8080);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

