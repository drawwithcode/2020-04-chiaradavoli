//img cellphone
let unlockedphone;

//sound
let ringtone;

//cam capture
let capture;

//text
let myText = "00's MELANCHOLIA";

//color background
let bgColor;
let colorList = ["#BFF28D", "#E174E1", "#E174E1", "#F57B11", "#C7ABE6", "#E6ACAB", "#E6E6AB", "#DF2D6E", "#2D43DF", "#4CDF2D", "#C4F1CA", "#10BCFF", "#D5D2C5", "#C8ECE8", "#DF2727", "#DAC1D1", "white"];

// //paragraphs
// var p1;
// var p2;
// var p3;
// var p4;
// var p5;
// var p6;
// var p7;
// var p8;

//input
let myInput;
//filter sliders;
let rSlider, gSlider, bSlider;


function preload() {
  // put preload code here
  //img cellphone load
  unlockedphone = loadImage("./assets/images/cellphoneunlocked.png");
  ringtone = loadSound("./assets/sounds/aurea.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  // ringtone.loop();

  //cam capture
  capture = createCapture(VIDEO);
  capture.hide();

  //bockground color change
  buttonBg = createButton("choose bg color");
  buttonBg.position(width / 1.2, 80);
  bgColor = color("white");
  buttonBg.mousePressed(changeBg);


  //ringtone button
  buttonRt = createButton("PRESS TO DECLINE");
  buttonRt.position(width / 1.83, 200);
  buttonRt.mousePressed(togglePlaying);

  //phone ringtone play
  ringtone.play();

  //paragraph text above input
  p1 = createP("What was your first mobile phone?");
  p1.position(width / 1.24, 150);

  //paragraph R
  p2 = createP("R");
  // p2.size(12);
  p2.position(width / 1.27, 285);

  //paragraph G
  p3 = createP("G");
  // p3.size(12);
  p3.position(width / 1.27, 315);

  //paragraph B
  p4 = createP("B");
  // p4.size(12);
  p4.position(width / 1.27, 345);

  //paragraph filter
  p5 = createP("CUSTOMIZE YOUR FILTER");
  // p5.size(20);
  p5.position(width / 1.2, 250);

  //paragraph option
  p6 = createP("Press OPTION to lock your phone");
  // p6.size(20);
  p6.position(width * 1 / 12, height / 1.3);

  //paragraph selfie
  p7 = createP("Press + to take a selfie");
  // p7.size(20);
  p7.position(width * 1 / 12, height / 1.26);

  //paragraph ringtone
  p8 = createP("Someone is calling you!!!");
  // p7.size(20);
  p8.position(width / 1.85, 150);

  //paragraph text input
  myInput = createInput("");
  myInput.position(width / 1.24, 200);

  //filter sliders
  push();
  rSlider = createSlider(0, 255, 0);
  rSlider.position(width / 1.24, 300);
  rSlider.size(300);
  gSlider = createSlider(0, 320, 0);
  gSlider.position(width / 1.24, 330);
  gSlider.size(300);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(width / 1.24, 360);
  bSlider.size(300);
  pop();

}

//ringtone
function togglePlaying() {
  if (ringtone.isPlaying == true) {
    ringtone.play();
  } else {
    ringtone.stop();
  }
}

//bg color change
function changeBg() {
  bgColor = color(random(colorList));
}

function draw() {
  // put drawing code here
  //bg color
  background(bgColor);

  //arch 1, 2 ,3
  push();
  stroke("#080A06");
  strokeWeight(4);
  noFill();
  translate(width / 2, height / 2.2);
  rotate(714.5);
  arc(0, 0, 100, 100, 0, HALF_PI);
  arc(0, 0, 200, 200, 0, HALF_PI);
  arc(0, 0, 300, 300, 0, HALF_PI);
  pop();

  //cam capture
  if (capture.loadedmetadata) {
    push();
    translate(width / 2, height / 2);
    rotate(PI / 180 * 44);
    scale(-1, 1);
    image(capture, 340, 105, 340, 260);
    pop();
  }

  //filter rgb
  push();
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  noStroke();
  fill(color(r, g, b, 75));
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(PI / 180 * 44);
  scale(-1, 1);
  rect(340, 105, 340, 260);
  pop();

  //img position
  imageMode(CENTER);
  image(unlockedphone, windowWidth / 2, windowHeight / 2, 1593 * 1.2, 1593 * 1.2);

  // main text
  fill("#080A06");
  textSize(35);
  textFont("Roboto Mono");
  textAlign(LEFT);
  text(myText, width * 1 / 12, height / 1.3);

  //input text
  push();
  textSize(60);
  stroke("#080A06");
  noFill();
  strokeWeight(1);
  textAlign(LEFT);
  text(myInput.value(), width * 1 / 12, height / 1.4);
  pop();

}

//function back to unlock
function keyPressed() {
  if (keyCode == OPTION) {
    window.open('index.html', '_self');
  }
}

//function download screen
function keyTyped() {
  if (key == "+") save("your00selfie.jpg")
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
