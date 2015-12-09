var xoff = 5.0;
var xincrement = 10.0;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(0);
  noStroke();
  pos = 0.0
  inc = 10.0 * 10000000
}

function draw() {
  fill(0, 10);
  rect(0,0,width,height);
  var mySinVal = sin(pos)
  amplified = mySinVal * 300
  n = random(amplified,width);
  xoff += xincrement;
  fill(255, 242, 0);
  ellipse(n, amplified*10, 10, 10);
  pos = pos + inc
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
  fill(255, 242, 0);
  ellipse(mouseX, mouseY, 10, 10);
  }
}
