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

function animate(){
	ctx.fillStyle = 'White';
	ctx.fillRect(0, 0, w, h);
	if (x >= w - 30){
		flag = false;
	}
	if (x < 30 ){
		flag = true;
	}	
	if (flag == true)
		x += 2;
	else
		x -= 2;
	drawCircle(x, y, "Green");
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