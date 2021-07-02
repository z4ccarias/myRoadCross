//código do ator
let xPlayer = 85;
let yPlayer = 366;
let colision = false;
let myPoints = 0;

function showPlayer(){
  image(playerImage, xPlayer, yPlayer, 30, 30);
}

function movementPlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(moveAllowed()){
      yPlayer += 3;
    }
  }
}

function colisionVerify(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < allCars.length; i++){
    colision = collideRectCircle(xCars[i], yCars[i], widthCars, heightCars, xPlayer, yPlayer, 15)
    if (colision){
      returnPlayer();
      soundColision.play();
      if (notZeroPoints()){
        myPoints -= 1;
      }
    }
  }
}

function returnPlayer(){
  yPlayer = 366;
}

function score(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(myPoints, width / 5, 27);
}

function addPoints(){
  if (yPlayer < 15){
    myPoints += 1;
    soundPoint.play();
    returnPlayer();
  }
}

function notZeroPoints(){
  return myPoints > 0;
}

function moveAllowed(){
  return yPlayer < 366;
}
