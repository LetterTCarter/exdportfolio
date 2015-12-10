var img;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  img = loadImage("images/volvo2.jpg");
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  stroke(pix, 128);
  line(mouseX, mouseY, width, y);
}
