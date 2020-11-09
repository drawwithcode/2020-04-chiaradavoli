//data typewriter
let data = "Enter PIN to unlock your phone:";

//img locked cellphone
let lockedphone;
//img enter
let enter;
//input
let inp;


function preload() {
  // put preload code here
  //imgs load
  lockedphone = loadImage("./assets/images/cellphonelocked.png");
  enter = loadImage("./assets/images/enter.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  background("black");

  //typerwriter text
  typeWriter(data, 0, windowWidth / 2 - 190, windowHeight / 2, 40);

  //input text pin
  let inp = createInput('');
  inp.input(myInputEvent);
  inp.position(windowWidth / 2 - 80, windowHeight / 2 + 50);

}

function draw() {
  // put drawing code here
  //img position
  imageMode(CENTER);
  image(lockedphone, windowWidth / 2, windowHeight / 3, 345, 345);
  image(enter, windowWidth / 2 - 8, windowHeight / 2 + 105, 130, 130);
}

//enter to unlock
function keyPressed() {
  if (keyCode == ENTER) {
    window.open('screenindex.html', '_self');
  }
}

function myInputEvent() {
  //console.log("typing", this.value());
}

//typewriter
function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    textFont("Roboto Mono");
    textSize(20);
    fill("white");
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
