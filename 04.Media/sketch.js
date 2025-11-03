let playing = false;
let img;
let audio;
let sentence = "To the River to the Sea Palestine will be Free";
let words = sentence.split(" ");
let colours = [
  [252, 3, 3],
  [11, 252, 3],
  [0, 0, 0],
  [255, 255, 255],
];
let counter = 0;

function preload() {
  img = loadImage("palestinechant.jpg");
  audio = loadSound("palestinechantsound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
}

function draw() {
  fill(colours[int(random(0, 4))]);
  if ( words[counter] == "River" || words[counter] == "Sea" || words[counter] == "Palestine" || words[counter] == "Free") {
    textSize(34);
  } else {
    textSize(22);
  }
  text(words[counter], random(windowWidth/4,windowWidth/3), random(windowHeight/1.7, windowHeight/1.2));
  if (counter > 9) {
    counter = 0;
  } else {
    counter++;
  }
}

function mouseClicked() {

  if ((playing == false)) {
    audio.loop();
    audio.amp(0.2)
    playing=true
  } else if ((playing == true)) {
    audio.pause();
    playing=false
  }
}