var car1, car1Img;
var track, trackImg;
var bullet, bulletImg;
var obstacle, obstacle1Img, obstacle2Img;
var reward, rewardImg;

function preload()
{
  car1Img = loadImage("images/car1.png");
  trackImg = loadImage("images/track_3.jpg");
  bulletImg = loadImage("images/bullet1.jpg");
  obstacle1Img = loadImage("images/obstacle1.png");
  obstacle2Img = loadImage("images/obstacle2.png");
  rewardImg = loadImage("images/goldCoin.png");
}

function setup() 
{
    createCanvas(displayWidth, displayHeight);

   track = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
   track.addImage(trackImg);
   //track.scale = 0.9;
   track.velocityY = 10;

   
   car1 = createSprite(displayWidth/2, displayHeight - 200, 45, 45);
   car1.addImage(car1Img);
   car1.scale = 1;
}

function draw()
{
   
  if(track.y > displayHeight)
  {
    track.y = displayHeight/2;
  }

  if(keyDown(LEFT_ARROW) && car1.x > displayWidth/2 - 300 )
  {
    car1.x = car1.x - 10;
  }
  
  if(keyDown(RIGHT_ARROW) && car1.x < displayWidth/2 + 300)
  {
    car1.x = car1.x + 10;
  }

  if(keyDown("SPACE"))
  {
      releaseBullets();
  }

  spawnObstacles();
  spawnRewards();

  drawSprites();
}

function releaseBullets()
{
   bullet = createSprite(car1.x,car1.y,10,10);
   bullet.addImage(bulletImg);
   bullet.scale = 0.1;
   bullet.shapeColor = "red";
   bullet.velocityY = -5;
}

function spawnObstacles()
{
  
 if(frameCount % 90 === 0)
 {
    obstacle = createSprite(Math.round(random(displayWidth/2 - 300,displayWidth/2 + 300)), -displayHeight/2 ,20,20);
    obstacle.velocityY = 5;
    var a = Math.round(random(1,2));
    switch(a)
    {
      case 1: obstacle.addImage(obstacle1Img);
              obstacle.scale = 0.03;
              break;
      case 2: obstacle.addImage(obstacle2Img);
              obstacle.scale = 0.03;
              break;
      default : break; 
    }
  }
}

function spawnRewards()
{
  if(frameCount % 60 === 0)
  {
  reward = createSprite(random([displayWidth/2-300, displayWidth/2-200, displayWidth/2-100, displayWidth/2, displayWidth/2+100, displayWidth/2 + 200, displayWidth/2 + 300]), -displayHeight/2 ,20,20);
  reward.velocityY = 8;
  reward.addImage(rewardImg);
  reward.scale = 0.05;
  }
}


