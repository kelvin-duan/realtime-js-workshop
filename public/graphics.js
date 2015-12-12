'use strict';

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'Red';
//ctx.fillRect(0, 0, canvas.width, canvas.height);

//ctx.fillStyle = 'Green';
//ctx.fillRect(canvas.width/2 - 25, canvas.height/2 - 25, 50, 50);

ctx.strockStyle = 'Yellow';
var w = canvas.width;
var h = canvas.height;
var x = 30;
var y = 100;
var flag = true;

function goRight(){
	x += 2;
	
}

function goLeft(){
	x -= 2;
	if (x <= w + 15 )
		flag = true;
}

function animate(){
	ctx.fillStyle = 'White';
	ctx.fillRect(0, 0, w, h);
	if (x >= h - 15)
		flag = false;
	goRight();
	goLeft();
	drawCircle(x, y, color);
	requestAnimationFrame(animate);
}

animate();

function drawCircle(x, y, color){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, 15, 0, Math.PI*2, true);
	ctx.stroke();
	ctx.fill();
	//ctx.closePath();
}