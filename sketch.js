var player, enemy ,space;
var l1;
var score = 0;

start = 0;
play = 1;
end = 2;
var gs = start;

function preload(){
  
 pi=loadImage("enemy40.png")
  ti=loadImage("space10.png")
  en1=loadImage("enemy10.png")
  en2=loadImage("enemy20.png")
   en3=loadImage("enemy30.png")
   limg = loadImage("laserimg.png")
  
}


function setup(){
  createCanvas(400,400)  
  fill("black");
  textSize(30);
  text("press space to start", 90,180);
  
  space= createSprite(200,200,400,380)
  space.addImage("pp",ti)
  space.scale = 2;
  playergrp = new Group();

  
  
  player= createSprite(200,350, 20,20)
  player.addImage("p", pi);
  playergrp.add(player);

  enemygrp = new Group();
  lasergrp = new Group();
 

}

function draw(){
 
if(gs=== start){
if(keyDown("space")){
  gs = play; 
}
}

if(gs === play){
 player.x=mouseX
 space.velocityY = 10;

 if(space.y>890){
   space.y = space.height/2;
 }

 if(keyDown("space")){
   laser();
 } 

for( var i = 0; i<enemygrp.length ; i++){
  if(enemygrp.get(i).isTouching(lasergrp)){
    enemygrp.get(i).destroy();
    lasergrp.destroyEach(); 
    score = score+10;
  }
} 

for( var i = 0; i<enemygrp.length ; i++){
  if(enemygrp.get(i).isTouching(player)){
    gs = end;     
  }
}

console.log(score);
  
 enemy()
  
  drawSprites();
}
if(gs ===play ){
fill("red");
textSize(20);
text("SCORE : " + score , 200,380); 
}
 
if(gs ===end  ){
  fill("red");
  textSize(20);
  text("SCORE : " + score , 200,380); 
  }

if(gs ===  end){ 
  background(255);
  fill("red");
  textSize(20);
  text("GAME OVER" , 150, 200);
  text("PRESS SPACE TO RESTART" , 100, 250);
  enemygrp.velocityEachY = 0;
  player.destroy();
  
}
}
function enemy(){
  
   if(frameCount%20===0){
     
     enem=createSprite(200,0,50,50)
     enem.velocityY=5
      enem.x=random(50,400)
    
       
     var r = Math.round(random(1,3));
     switch(r){
       case 1 : enem.addImage("e1", en1)
         break;
            case 2 : enem.addImage("e2", en2)
         break;
            case 3 : enem.addImage("e3", en3)
         break;
           
     }
     enemygrp.add(enem);
     } 

}

function laser(){
  l1 = createSprite(player.x , player.y - 20 , 20,10);
  l1.velocityY = -20;
  l1.addImage("hii" , limg);
  l1.scale = 0.07;

  lasergrp.add(l1);
}

