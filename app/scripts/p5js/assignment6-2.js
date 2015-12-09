var xoff = 0.0;
var xincrement = 5.0;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(2, 31, 76);
  noStroke();
  pos = 0.0
  inc = 4.0
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  var mySinVal = sin(pos)
  amplified = mySinVal * 300
  n = random(mySinVal, width);
  xoff += xincrement;
  fill(20, 70, 150);
  ellipse(n, amplified*5, amplified, 10);
  pos = pos + inc

}
