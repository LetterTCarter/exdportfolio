var canvasWidth = 800
var canvasHeight = 500
var mySound1;
var mySound2;
var level;
var size;
var h;
var xpos = 0
var speed = 2
var system;

function preload() {
  mySound1 = loadSound('../../sounds/raggaman__c-1.wav');
  mySound2 = loadSound('../../sounds/c-drone-remix-3-1.wav');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
  background(0);
  colorMode(HSB, 360, 100, 100);
  amplitude = new p5.Amplitude();
  mySound1.setVolume(0.1);
  mySound2.setVolume(0.1);
  system = new ParticleSystem(createVector(width/2, 50));
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
  mySound1.play();
  }
}

function keyPressed() {
  mySound2.play();
  system.addParticle();
}

function draw() {
  h = random(0, 360);
  fill(h, 90, 90);
  xpos = xpos + speed;
  level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 8000);
    for (x = 0; x <= canvasWidth; x += 50) {
      for (y = 0; y <= canvasHeight; y += 50) {
        ellipse(xpos, canvasHeight/2, size, size);
        stroke(h, 174, 239)
      }
    }
    if((xpos > width) || (xpos < 0)) {
      speed = speed * -1;
    }
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(h, this.lifespan);
  strokeWeight(2);
  h = random(0, 360);
  fill(h, 90, 90);
  rect(this.position.x, this.position.y, size, size);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

function stop() {
  mySound1.stop();
  mySound2.stop();
}
