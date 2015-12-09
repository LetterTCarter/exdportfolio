var canvasWidth = 640
var canvasHeight = 480
var mySound;
var level;
var size;
var h;
var xpos = 0
var speed = 2

function preload() {
  mySound = loadSound('../../sounds/arcade-music-loop.wav')
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
  colorMode(HSB, 360, 100, 100);
  amplitude = new p5.Amplitude();
  mySound.setVolume(0.1);
}

function start() {
  mySound.loop();
}

function draw() {
  h = random(0, 360);
  fill(h, 90, 90);
  xpos = xpos + speed;
  level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 8000);
    for (x = xpos; x <= canvasWidth; x += 50) {
      for (y = 0; y <= canvasHeight; y += 50) {
        ellipse(xpos, canvasHeight/2, size, size);
        stroke(0, 174, 239)
      }
    }
    if((xpos > width) || (xpos < 0)) {
      speed = speed * -1;
    }
}

function stop() {
  mySound.stop();
}
