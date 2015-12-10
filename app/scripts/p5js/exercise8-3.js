var img;
var blueness;

function preload() {
  img = loadImage("images/volvo2.jpg")
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  img.loadPixels()
}

function draw() {

  var change = map(mouseX, mouseY, width, 0, 255)
  change = Math.abs(change)
  change = Math.floor(change)

  for (i = 0; i <= img.pixels.length; i = i + 4) {
    blueness = img.pixels[i+2]

    if (blueness >= 50) {
      img.pixels[i] = img.pixels[i - change * 75]
    }

    // img.pixels[i] = 123
    // img.pixels[i+1] = 123
    // img.pixels[i+2] = 5
    // img.pixels[i+3] = 255
  }
  img.updatePixels()

  image(img, 0, 0, 600, 600)
}
