var bg_img;
var spaceShip,spaceShip_img;
var asteroid,asteroid_img;
var star,star_img;

function preload(){
bg_img=loadImage("Bg1.jpeg");
spaceShip_img = loadImage("spaceShip_img.png");
star_img = loadImage("star_img.png");
asteroid_img = loadImage("asteroid_img.png");
}

function setup() {
 createCanvas(1600,800)
spaceShip=createSprite(80,350,50,50);
spaceShip.addImage(spaceShip_img);
spaceShip.scale=0.2;
 spaceShip.velocityX=6;

 

}

function draw() {
 background(bg_img);
 CreateStar();
 CreateAsteroid();

 
 if(keyDown(RIGHT_ARROW)){
    spaceShip.x = spaceShip.x+20;
     }
     if(keyDown(LEFT_ARROW)){
        spaceShip.x = spaceShip.x-20;
         }
         if(keyDown(UP_ARROW)){
            spaceShip.y = spaceShip.y+20;
             }
             if(keyDown(DOWN_ARROW)){
                spaceShip.y = spaceShip.y-20;
                 }
 drawSprites();
 
}
function CreateStar(){
if(frameCount%100===0){
star = createSprite(random(50,1500),random(50,700));
star.addImage(star_img);
star.scale=0.3;

}
}
function CreateAsteroid(){
    if(frameCount%100===0){
    asteroid = createSprite(random(50,1500),random(50,700));
    asteroid.addImage(asteroid_img);
    asteroid.scale=0.3;
    asteroid.velocityX =-4;
    
    }
    }
