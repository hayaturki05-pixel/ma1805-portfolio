let sentence = "To the River to the Sea Palestine will be Free";
let words = sentence.split(" ");
let colours = [[252, 3, 3], [11, 252, 3],[ 0,0,0], [255,255,255]];
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(39, 168, 194);
}


function draw() {
  fill(colours[int(random(0,4))]);
  if (words[counter]== 'River' || words[counter]=='Sea' || words[counter]=='Palestine' || words[counter]=='Free'){
    textSize(34)
  }else{
    textSize(22)
  }
  text(words[counter], random(0, windowWidth), random(0, windowHeight));
  if (counter > 9) {
    counter = 0;
  } else {
    counter++;
  }
}