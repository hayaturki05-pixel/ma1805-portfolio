function setup() {
  createCanvas(1100, 800);
  background(230);
}

function draw() {
  // this is for the cat's face
  fill(235, 237, 187);
  rect(250, 250, 600, 400);

  // this is for the left ear
  fill(128, 105, 101);
  triangle(250, 250, 330, 100, 410, 250);

  // this is for the right ear
  fill(128, 105, 101);
  triangle(690, 250, 770, 100, 850, 250);

  // this is for the border of the left eye
  fill(89, 125, 101);
  circle(400, 350, 100);

  // this is for outer eye in the left eye border
  fill(255);
  circle(412, 350, 75);

  // this is for the cats left pupil
  fill(128, 105, 101);
  circle(419, 350, 60);

  // this is for the border of the right eye
  fill(89, 125, 101);
  circle(700, 350, 100);

  // this is for outer eye in the right eye border
  fill(255);
  circle(712, 350, 75);

  // this is for the cats right pupil
  fill(128, 105, 101);
  circle(719, 350, 60);

  // this is for the nose
  fill(125, 92, 98);
  triangle(510, 480, 550, 420, 590, 480);

  // whiskers for the left side
  line(510, 480, 150, 600);
  line(510, 480, 150, 500);
  line(510, 480, 150, 400);

  // whiskers for the left side
  line(590, 480, 950, 600);
  line(590, 480, 950, 500);
  line(590, 480, 950, 400);

  fill(92, 125, 97);
  ellipse(550, 550, 140, 60, 6);

  fill(255);
  circle(870, 150, 120);

  fill(255);
  circle(970, 100, 90);
  
  fill(255);
  circle(1050, 60, 70);
}