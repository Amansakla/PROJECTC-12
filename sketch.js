var  runner, runner_running, runner_collided;
var  path, invisiblePath, pathImage;

function preload(){

  //pre-load images
  runner_running = loadAnimation("runner-1.png", "runner-2.png");

  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

   //Moving background
   path = createSprite(200,200,100,400);
   path.addImage(pathImage);
   path.velocityY = 4;
   path.scale = 0.9;

  //create runner sprite here
  runner = createSprite(200,360,20,80);
  runner.addAnimation("running", runner_running);
  runner.scale =0.07;
}


function draw() {
  background(0);
 
   runner.velocityX = 0;
   
  if (keyDown("LEFT_ARROW")){
    runner.velocityX = runner.velocityX = -4;
  }
  if (keyDown("RIGHT_ARROW")){
    runner.velocityX = runner.velocityX = 4;
  }
  if (path.y > 400){
    path.y = height/2;
  }

  drawSprites();

}
