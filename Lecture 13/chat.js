var express = require("express");
var bodyParser = require("body-parser");
var socketio = require("socket.io");

var app = express();
var server = app.listen(8080);
var io = socketio.listen(server);
console.log("Server started at 8080");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var messages = [];

app.get("/", function (req, res){
	res.sendfile("index.html");
});

io.on("connection", function(socket){
	console.log("Client connected");

	socket.emit("chat history", messages);
	socket.on("desconnected", function(){
		console.log("Client disconnected");
	});
	socket.on("chat message", function(msg){
		messages.push(msg);
		io.emit("chat message", msg);
	});
});