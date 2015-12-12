'use strict';
//console.log("Hello World");
var sock = io();
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;

function onMessage(msg){
	console.log("onMessage");
	var li = document.createElement('li');
	li.innerHTML = msg;
	
	var chatList = document.getElementById('chat');
	chatList.appendChild(li);
}

function sendMessage(msg){
	console.log("sendMessageMessage");
	sock.emit('chat', msg);
}

sock.on('chat', onMessage);
sock.on('circle', drawCircle);

function drawCircle(circle){
	ctx.fillStyle = circle.color;
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, 15, 0, Math.PI*2, true);
	ctx.stroke();
	ctx.fill();
	//ctx.closePath();
}

function getRandomColor(){ 
	return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
} 

function init(){
	var form = document.getElementById('say');
	
	form.addEventListener('submit', function(e){
		var sayField = document.querySelector('#say input').value;
		//window.alert(sayField);
		sendMessage(sayField);
		
		sayField = '';		
		e.preventDefault();
	});
	
	addEventListener('mousedown', function(e){
		sock.emit('circle', {x: e.layerX, y:e.layerY, color:getRandomColor()});
	});
	
}

init();