var canvasWidth = 640
var canvasHeight = 480
var circles = [];
var hx = canvasWidth/2;
var hy = canvasHeight/2;
var num = 800;
var row = 10;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
  generate();
  background(0);
}

function draw() {
  noStroke();
  textSize(36);
  textFont("Helvetica");
  noStroke();
  fill(255, 242, 0);
  for (var i=0; i<circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
  text('create', canvasWidth/2, canvasHeight/2);
}

function generate(){

  for (var i=0; i<num; i++) {
    circles.push(new Circle(hx,hy));
  }
}

function Circle(startX,startY,rr,gg,bb) {
  this.x = startX;
  this.y = startY;
  this.speed = 5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    fill(rr,gg,bb);

  };

  this.display = function() {
    ellipse(this.x, this.y, 5, 5);
  };
}
