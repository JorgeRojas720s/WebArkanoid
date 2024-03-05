const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//screen game
canvas.width = 450;
canvas.height = 550;

//bar
const barWidth = 50;
const barHeight = 10;
let barX = canvas.width / 2;
const barY = canvas.height - 40;
//bar movements
let pressLeft = false;
let pressRight = false;
//bar sensitibity
let barSensitive = 5;

//ball
const radiusBall = 5;
let ballPosX = canvas.width / 2;
let ballPosY = canvas.height - 50;
// ball movements
let ballDirectionX = -3;
let ballDirectionY = -3;

function drawBall() {
 // console.log("que peooooooooo");
  context.beginPath(); // inicia un trazado
  context.fillStyle = "red";
  context.arc(ballPosX, ballPosY, radiusBall, 0, 2 * Math.PI);
  context.fill(); // rellena en el canvas
  context.closePath(); //cierra el trazado
}

function drawBar() {
  context.beginPath(); // inicia un trazado
  context.fillStyle = "#09f";
  context.fillRect(barX, barY, barWidth, barHeight);
  context.fill(); // rellena en el canvas
  context.closePath(); //cierra el trazado
}

function drawBlocks() {}

function ballMovement() {
  collisionEdge();
  ballPosX += ballDirectionX;
  ballPosY += ballDirectionY;
}

function keyBoardEvenvents() {
  document.addEventListener("keydown", keyDownHandler); //Cuando ocurre el evento especificado, se ejecuta la función que se pasa como segundo argumento.
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      pressRight = true;
    } else if (key === "Left" || key === "ArrowLeft") {
      pressLeft = true;
    }
  }
  function keyUpHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      pressRight = false;
    } else if (key === "Left" || key === "ArrowLeft") {
      pressLeft = false;
    }
  }
}

function barMovements(){

    if(pressRight && barX < canvas.width - barWidth ){
        barX += barSensitive;
    }else if(pressLeft && barX > 0){
        barX -= barSensitive;
    }

}

function collisionEdge() {
  //Borde Derecho
  if (ballPosX + ballDirectionX > canvas.width - radiusBall) {
    ballDirectionX = -ballDirectionX;
  }
  //Borde Izquierdo
  if (ballPosX + ballDirectionX < 0 + radiusBall) {
    ballDirectionX = -ballDirectionX;
  }
  //Borde de arriba
  if (ballPosY + ballDirectionY < 0 + radiusBall) {
    ballDirectionY = -ballDirectionY;
  }
}

function collisionBar() {}

function cleanCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
console.log(pressLeft,pressRight);
  //limpiar canvas
  cleanCanvas();

  //Draw components
  drawBall();
  drawBar();
  drawBlocks();

  //movimientos
  ballMovement();
  barMovements();

  //Colisiones

  collisionBar();

  // collisionBlock();

  //collisions();

  window.requestAnimationFrame(draw);
}

//Game
keyBoardEvenvents();
draw();
