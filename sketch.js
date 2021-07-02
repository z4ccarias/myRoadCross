function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(roadImage);
  showPlayer();
  showCars();
  movementCars();
  movementPlayer();
  returnCars();
  colisionVerify();
  score();
  addPoints();
}

