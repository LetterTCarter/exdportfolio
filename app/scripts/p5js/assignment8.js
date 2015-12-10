var capture;

alert("Please allow me to use your webcam");

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  colorMode(HSB, height, height, height);
  // capture.hide();
}

function draw() {
  background(0);
  // image(capture, 0, 0, 320, 240);
  capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 8, 48));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      fill(mouseY, height, height);
      noStroke();
      ellipse(x, y, radius, radius);
    }
  }
}
