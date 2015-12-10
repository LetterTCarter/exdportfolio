var img;
var smallPoint, largePoint;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  img = loadImage("../../images/volvo2.jpg");
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);
}
