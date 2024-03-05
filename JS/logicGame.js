
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//screen game
canvas.width = 450;
canvas.height = 550;


//bar
const barWidth = 50;
const barHeight = 10;
let barX = canvas.width / 2;
const barY = canvas.height -40;

//ball
const radiusBall = 5;
let ballPosX = canvas.width / 2;
let ballPosY = canvas.height -50;
// ball movements
let ballDirectionX = 3;
let ballDirectionY = -3;


function drawBall(){
    console.log("que peooooooooo");
    context.beginPath(); // inicia un trazado
    context.arc(ballPosX,ballPosY, radiusBall, 0 , 2 * Math.PI);
    context.fillStyle = 'red'; 
    context.fill(); // rellena en el canvas
    context.closePath(); //cierra el trazado
}

function drawBar(){
    context.beginPath(); // inicia un trazado
    context.fillRect(barX,barY, barWidth,barHeight);
    context.fillStyle = '#fff'; 
    context.fill(); // rellena en el canvas
    context.closePath(); //cierra el trazado
}


function ballMovement(){
    collisionEdge();
    ballPosX += ballDirectionX;
    ballPosY += ballDirectionY;
    
}

function drawBlocks(){
    
}

function barMovement(){
    
}

function collisionEdge(){
    //Borde Derecho
    if(ballPosX + ballDirectionX > canvas.width - radiusBall){
        ballDirectionX = -ballDirectionX;
    }
     //Borde Izquierdo
    if(ballPosX + ballDirectionX  < 0 + radiusBall){
        ballDirectionX = -ballDirectionX;
    }
     //Borde de arriba
    if(ballPosY + ballDirectionY < 0 + radiusBall){
        ballDirectionY = -ballDirectionY;
    }
}

function cleanCanvas(){
    context.clearRect(0,0,canvas.width,canvas.height)
}

function draw(){
    //limpiar canvas
    cleanCanvas();

    //Draw components
    drawBall();
    drawBar();
    drawBlocks();

    //movimientos
    ballMovement();
    barMovement();

    //Colisiones

   //collisionBar();
   
   // collisionBlock();

    //collisions();

    window.requestAnimationFrame(draw);
}

//Game
draw();