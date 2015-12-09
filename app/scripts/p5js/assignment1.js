function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(127, 207, 104);
}

  function draw() {
    if (mouseIsPressed) {
      fill(164, 142, 91);
    } else {
      fill(89, 153, 177);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
