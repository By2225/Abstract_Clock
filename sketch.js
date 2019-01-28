let x = 1280;
let y = 606;
let hourCircleSize = 250;
let hourCircleXaxis = hourCircleSize;
let minCircleSize = 200;
let minCircleXaxis = minCircleSize;
let secCircleSize = 150;
let secCircleXaxis = secCircleSize;

function setup() {
	createCanvas(x,y); // make an HTML canvas element width x height pixels
}

function draw() {
	background('#C7DDF5');	

	fill('#9ACEFF');
	circle(hourCircleXaxis, y/2, hourCircleSize);
	hourCircleXaxis= hourCircleSize + ((hour() % 12) * ((x - 2*hourCircleSize) / 11));

	fill('#669ACC');
	circle(minCircleXaxis, y/2, minCircleSize);
	minCircleXaxis= minCircleSize + ((minute()) * ((x - 2*minCircleSize) / 59));

	fill('#F336799');
	circle(secCircleXaxis, y/2, secCircleSize);
	secCircleXaxis= secCircleSize + ((second()) * ((x - 2*secCircleSize) / 59));
		/* Included implementation of translate(), push(), and pop() but unnecessary
	push();
	fill('#9ACEFF');
	translate(hourCircleXaxis, 0);
	circle(0, y/2, hourCircleSize);
	hourCircleXaxis= hourCircleSize + ((hour() % 12) * ((x - 2*hourCircleSize) / 11));
	pop();

	push();
	translate(minCircleXaxis, 0);
	fill('#669ACC');
	circle(0, y/2, minCircleSize);
	minCircleXaxis= minCircleSize + ((minute()) * ((x - 2*minCircleSize) / 59));
	pop();

	push();
	translate(secCircleXaxis, 0);
	fill('#F336799');
	circle(0, y/2, secCircleSize);
	secCircleXaxis= secCircleSize + ((second()) * ((x - 2*secCircleSize) / 59));
	pop();*/
}
