
var movingrect,rect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200,200, 50, 80);
  movingrect.shapeColor="blue";
rect=createSprite(375,200,30,60);
rect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrect.y=World.mouseY
  movingrect.x=World.mouseX

  if (movingrect.x-rect.x < movingrect.width/2+rect.width/2  &&
     rect.x-movingrect.x <  rect.width/2 + movingrect.width/2 &&
     movingrect.y-rect.y < movingrect.height/2+rect.height/2  &&
      rect.y-movingrect.y <  rect.height/2 + movingrect.height/2){
   

movingrect.shapeColor="red";
rect.shapeColor="red";
}

else {
movingrect.shapeColor="blue";
rect.shapeColor="green";
}

  drawSprites();
}