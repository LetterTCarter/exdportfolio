var myInterval
var canvasWidth = 800
var canvasHeight = 600
var x, y;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  x = canvasWidth/2;
  y = canvasHeight;
}

function start() {
  myInterval = setInterval(function() {
  fill(mouseY, height, height);
  ellipse(x, y, 100, 100);
  x = x + random(-100, 100);
  y = y - 50;
  if (x <= 0) {
    x = canvasWidth/2;
  }
  if (y < 0) {
    y = canvasHeight;
  }
}, 1000); }

function stop() {
  clearInterval(myInterval);
}
