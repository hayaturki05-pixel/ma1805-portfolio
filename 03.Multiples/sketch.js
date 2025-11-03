let color = [137, 232, 154];
let size = 100;
let counter = 0;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
}

function draw() {
  color[0] = color[0] - 10;
  color[1] = color[1] - 15;
  color[2] = color[2] - 10;

  counter++;

  if (counter > 10) {
    color = [137, 232, 154];
    counter = 0;
  }
  fill(color);
  circle(mouseX, mouseY, size);
}

function mouseClicked() {

  fill(98, 54, 107)
  rect(random(0,windowWidth), random(0,windowHeight), 50, 50);
}