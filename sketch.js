
var monkey , monkey_running
var bananaImage, obstacleImage, ground;
var bananaGroup, obstacleGroup;
var score = 0;

var gravity = 0.8;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);
  

  background( 255, 255, 255 );
  
  
  monkey = createSprite( 80, 315, 20, 20);
  monkey.addAnimation( "moving", monkey_running );
  monkey.scale = 0.1;
  
  ground = createSprite( 400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();  
  

}

function createBanana() 
{
   
  if (frameCount % 80 === 0){
    var bananaY = Math.round( random ( 120, 200) );
    var banana = createSprite( 420, bananaY, 40, 40 );
    
    banana.velocityX = -4;
    banana.lifetime = 300;
    banana.scale = 0.1;
    
    banana.addImage( bananaImage );
    
    bananaGroup.add( banana );
  }
  
}

function createObstacle() 
{
  if ( frameCount % 300 === 0 )
  {
    var obstacle = createSprite( 420, ground.y - 20, 40, 40 );
    
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    obstacle.scale = 0.1;
    
    obstacle.addImage( obstacleImage );
    
    obstacleGroup.add( obstacle );
  }
}

var survivalTime = 0;

function draw() {
  
  background( 255, 255, 255 );
  
  if( ground.x < 0 )
    ground.x = ground.width/2;  
  
  if( keyDown("space") && monkey.y >= 310 )
    monkey.velocityY = -15;
  
  monkey.velocityY += gravity;
  
  createBanana();
  createObstacle();
            
  survivalTime = Math.ceil( frameCount/frameRate());
  
  monkey.collide( ground );
  
  stroke( "black" );
  textSize( 20 );
  fill( "black");
  text( "Score: " + score, 500, 50)
  
  stroke( "black" );
  textSize( 20 );
  fill( "black");
  text( "Survival Time: " + survivalTime, 100, 50)
  
  
  drawSprites();  
  
}






