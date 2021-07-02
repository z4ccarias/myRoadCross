//código do carro

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let widthCars = 50;
let heightCars = 40;

function showCars(){
  for (let i = 0; i < allCars.length; i++){
    image(allCars[i], xCars[i], yCars[i], widthCars, heightCars);
  }
}

function movementCars(){
  for (let i = 0; i < allCars.length; i++){
    xCars[i] -= speedCars[i];
  }
}

function returnCars(){
  for (let i = 0; i < allCars.length; i++){
    if (pasScreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function pasScreen(xCar){
  return xCar < - 50;
}




