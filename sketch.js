var Ball, JumpPad, Lava1, Lava2, Lava3, Lava4, PurplePad, Poison, PushPad, YellowPad, whitehat1;

var BallImage, JumpPadImage, LavaImage, PurplePadImage, PoisonImage, PushPadImage, YellowPadImage, whitehat1Image;
var bg;
var pngTempelate1, pngTempelate2, pngTempelate3;
var pngTempelate1Img, pngTempelate2Img, pngTempelate3Img;
var gameState=1;


function preload(){
  BallImage=loadImage("BallWhitehat.jpg");
  JumpPadImage=loadImage("JumpPadWhitehat.jpg");
  LavaImage=loadImage("LavaWhitehat.jpg");
  PurplePadImage=loadImage("PurplePadWhitehat.jpg");
  PoisonImage=loadImage("PoisonWhitehat.jpg");
  PushPadImage=loadImage("PushPadWhitehat.jpg");
  YellowPadImage=loadImage("YellowSquareWhitehat.jpg");
  whitehat1Image=loadImage("whitehat1.jpg");
  bg=loadImage("background_santa.png");
  pngTempelate1Img=loadAnimation("PngTempelate(2).png","PngTempelate(3).png", "PngTempelate(4).png", "PngTempelate(3).png");
  pngTempelate2Img=loadImage("PngTempelate(3).png");
  //pngTempelate3Img=loadImage("PngTempelate(4).png");
  

}

function setup() {
  createCanvas(650, 550);
 
 

     pngTempelate2=createSprite(273,400);
     pngTempelate2.addAnimation("pngTempelate",pngTempelate1Img);
     pngTempelate2.scale=0.7;

     /*pngTempelate3=createSprite(320,400);
     pngTempelate3.addImage(pngTempelate3Img);
     pngTempelate3.scale=10;*/
           
}


function draw() {
  background("black");

  if(gameState===1){
   
    if(frameCount%100===0){
     
   
   for(i=55;i<650;i=i+110){

      Lava3=createSprite(i,270);
      Lava3.addImage(LavaImage);
      Lava3.scale=0.5;
      Lava3.velocityY=1;
      Lava3.lifetime=120;
      }
    
      for(i=0;i<650;i=i+110){
    
        Lava1=createSprite(i,220);
        Lava1.addImage(LavaImage);
        Lava1.scale=0.5;
        Lava1.velocityY=1;
        Lava1.lifetime=120;    
        }
       
      for(i=55;i<650;i=i+110){
    
            Lava2=createSprite(i,170);
            Lava2.addImage(LavaImage);
            Lava2.scale=0.5;
            Lava2.velocityY=1;
            Lava2.lifetime=120;
        }
          
       for(i=0;i<650;i=i+110){
        Lava4=createSprite(i,320);
              Lava4.addImage(LavaImage);
              Lava4.scale=0.5;
              Lava4.velocityY=1;
              Lava4.lifetime=120;
        } 

        if(Lava1.y>240){
         gameState=2;
        }
      }
  }



  if(gameState===2){
   
    if(frameCount%100===0){
     
   
   for(i=55;i<650;i=i+110){

      Lava3=createSprite(i,170);
      Lava3.addImage(LavaImage);
      Lava3.scale=0.5;
      Lava3.velocityY=1;
      Lava3.lifetime=120;
      }
    
      for(i=0;i<650;i=i+110){
    
        Lava1=createSprite(i,120);
        Lava1.addImage(LavaImage);
        Lava1.scale=0.5;
        Lava1.velocityY=1;
        Lava1.lifetime=120;    
        }
       
      for(i=55;i<650;i=i+110){
    
            Lava2=createSprite(i,70);
            Lava2.addImage(LavaImage);
            Lava2.scale=0.5;
            Lava2.velocityY=1;
            Lava2.lifetime=120;
        }
          
       for(i=0;i<650;i=i+110){
        Lava4=createSprite(i,220);
              Lava4.addImage(LavaImage);
              Lava4.scale=0.5;
              Lava4.velocityY=1;
              Lava4.lifetime=120;
        } 

      }
    }
  

  drawSprites();
}
