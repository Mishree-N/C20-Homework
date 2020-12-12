//create variables
var rect1, rect2;


function setup() {
  createCanvas(400,400);

  //create sprites
  rect1 = createSprite(100, 200, 50, 50);
  rect2=createSprite(300,200,50,50);
  //make them green
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  //make them move towards each other
  rect1.velocityX=2;
  rect2.velocityX=-2;

}

function draw() {
  background(255,255,255); 

  //if the sprites are touching/colliding,
  if (rect1.x-rect2.x <= rect1.width/2+rect2.width/2 && 
    rect2.x-rect1.x <= rect1.width/2+rect2.width/2 &&
    rect2.y-rect1.y <= rect1.height/2+rect2.height/2 &&
    rect1.y-rect2.y <= rect1.height/2+rect2.height/2) {
    //make them bounce against each other by changing velocity
    rect1.velocityX=rect1.velocityX*-1;
    rect1.velocityY=rect1.velocityY*-1;
    rect2.velocityX=rect2.velocityX*-1;
    rect2.velocityY=rect2.velocityY*-1;

    //otherwise,
  }

  //show sprites
  drawSprites();
}