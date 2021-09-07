let song1 ;

function preload() {
  song1 = loadSound("assets/jaz.mp3");


}

function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {
  background('blue');

}

function touchStarted() {
  getAudioContext().resume();
}
