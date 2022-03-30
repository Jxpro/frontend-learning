// Express server on port 3000

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Socket.io

var clients = [];
var clientId = 0;

io.on('connection', function (socket) {
    var client = {
        id: clientId++,
        socket: socket
    };

    socket.on('message', function (message) {
        socket.broadcast.emit('message', message);
    });

    clients.push(client);

    socket.on('disconnect', function () {
        clients.splice(clients.indexOf(client), 1);
    });
});

// Copilot

var copilot = require('./copilot');

copilot.on('message', function (message) {
    io.emit('message', message);
});

copilot.on('error', function (error) {
    io.emit('error', error);
});
