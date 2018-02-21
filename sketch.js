// Factors of  1200:
// 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 25, 30, 40, 48, 50, 60, 75, 80, 100, 120, 150, 200, 240, 300, 400, 600, 1200
//
const NOISE_SEED = 10003;
const RANDOM_SEED = NOISE_SEED;
const NUM_FRAMES = 5000;
const DEBUG_MODE = true;

function setup() {
  createCanvas(1200, 1200);
  background(51);
  noiseSeed(NOISE_SEED);
  randomSeed(RANDOM_SEED);
}

function draw() {

  if (DEBUG_MODE) {
    if (frameCount % 100 == 0) printStatus();
    if (frameCount == NUM_FRAMES) noLoop();
  }
}

function printStatus() {
}

function keyPressed() {
  switch (key) {
    case 'S':
      loop();
      console.log("Started looping");
      break;
    case ' ':
      noLoop();
      console.log("Stopped looping");
      printStatus();
      break;
    default:
      break;
  }
}
