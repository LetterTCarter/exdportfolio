var myInterval1
var myInterval2
var myInterval3
var canvasWidth = 640
var canvasHeight = 480
var x, y;
var h;
var barWidth = 20;
var barX = 0;
var barY = 0;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
  x = 0;
  y = canvasHeight;
}

function start() {
  myInterval1 = setInterval(function() {
    h = random(0, 360);
    fill(h, 90, 90);
    ellipse(x, y, 20, 20);
    h = (h + 1) % 360;
    x = x + 20;
    y = y - 20;
    if (x > canvasWidth) {
      x = 0;
    }
    if (y < 0) {
      y = canvasHeight;
    }
}, 1000);

  myInterval2 = setInterval(function() {
    whichBar = x;
    if (whichBar) {
      barX = x;
      h = random(0, 360);
      fill(h, 90, 90);
      rect(barX, 0, barWidth, height);
      h = (h + 1) % 360;
    }
    if (barX > canvasWidth) {
      barX = 0;
    }}, 10000);

  myInterval3 = setInterval(function() {
    whichBar = y;
    if (whichBar) {
      barY = y;
      h = random(0, 360);
      fill(h, 90, 90);
      rect(0, barY, width, barWidth);
      h = (h + 1) % 360;
    }
    if (barY < canvasHeight) {
      barY = 0;
    }}, 60000);
}

start ();
