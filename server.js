'use strict';
var state = new Array();

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();
let server = http.createServer(app);


let io = socketio(server);
io.on('connection', (sock) => {
	state.forEach(function(e){
		io.emit('circle', e);
	});
	console.log('Client Joined');
	sock.on('chat', (msg) =>{
		io.emit('chat', msg);
	});
	sock.on('circle', (circle) =>{
		io.emit('circle', circle);
		state.push(circle);
	});
	//console.log('Somebody Connected');
});


//console.log(__dirname + "/public");
app.use(express.static(__dirname + "/public"));

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080, () => {
	console.log('Listening to 8080');	
})