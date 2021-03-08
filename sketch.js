
let song, amplitude;

function preload() {
    song = loadSound('milesdavis.mp3');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    amplitude = new p5.Amplitude();
  }
  
  function draw() {
    background(2);
    let level = amplitude.getLevel();
    let diam = map(level, 0, 1, 10, 400);
    fill(255,0,0);
    ellipse(displayWidth/2,displayHeight/2,diam,diam);
  }
  
function mousePressed() {
    if(song.isPlaying()) {
        song.stop()
    } else{
        song.play()
    }
}
  
  