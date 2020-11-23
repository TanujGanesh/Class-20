function setup() {
  createCanvas(400,400);
  fixed = createSprite(100, 100, 50, 50);
  fixed.debug = true;
  fixed.velocityY = 1;

  moving = createSprite(100,200,50,50);
  moving.debug = true;
  moving.velocityY = -1;
}

function draw() {
  background("blue");  
  
  //moving.x=mouseX;
  //moving.y=mouseY;
  
  
if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
  fixed.x-moving.x<moving.width/2+fixed.width/2){
    fixed.velocityX*=(-1);
    moving.velocityX*=(-1);
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
   if(moving.y-fixed.y<moving.height/2+fixed.height/2&&
  fixed.y-moving.y<moving.height/2+fixed.height/2){
    moving.velocityY*=(-1);
    fixed.velocityY*=(-1);
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }

  drawSprites();
}