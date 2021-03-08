const { FILL, default: p5 } = require("./p5");

Let mySound, amplitude;
function preload() {
    mySound = loadSound('milesdavis.mp3');
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    console.log("setup");
    amplitude = new p5.Amplitude();
  }
  
  function draw() {
    background(2);
    let level = amplitude.getLevel();
    let diam = map(level, 0, 1, 10, 400);
    Fill(255,0,0);
    ellipse(150,150,diam,diam);
  }
  
function mousePressed() {
    if(mySound.isPlaying()) {
        mySound.stop();
    } else{
        mySound.play();
    }
}
  
  