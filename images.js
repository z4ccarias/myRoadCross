// imagens e sons do jogo

let roadImage;
let playerImage;
let carImage;
let carImage2;
let carImage3;

//sons do jogo

let soundTrack;
let soundColision;
let soundPoint;

function preload(){
  roadImage = loadImage("images/estrada.png");
  playerImage = loadImage("images/ator-1.png");
  carImage = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");  
  allCars = [carImage, carImage2, carImage3, carImage2, carImage3, carImage];
  
  soundTrack = loadSound("sounds/trilha.mp3");
  soundColision = loadSound("sounds/colidiu.mp3");
  soundPoint = loadSound("sounds/pontos.wav");
}