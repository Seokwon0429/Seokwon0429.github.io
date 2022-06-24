let character;
let gun;
let bullet = [];
let bulletcheck = []

let enemy = [];
let enemyNum = 5;
let bulletNum = 10;


let gdis = 100;

let SCORE = 0;
let USERHP = 10;

let button;
let playcheck = 0;


function preload(){
  gun = loadImage('image/gun.png');
  
  enemypng = loadImage('image/enemy1.png');
  backgroundpng = loadImage('image/background3.jpg');
  characterpng = loadImage('image/character.png');
  //backgroundpng = loadImage('image/background.eps');

  backgroundsound = loadSound('image/backgroundsoud.wav');
  gunsound = loadSound('image/gunsound.wav');
  hitsound = loadSound('image/hitsound.wav');
  knocksound = loadSound('image/knock.wav');
  deadsound = loadSound('image/deadsound.wav');
  aimpng = loadImage('image/aim.png');
  
  apple = loadImage('image/Apple.jpeg')
}
function setup() {
  button = createButton('Start Game');
  
  createCanvas(900, 500);
 
  frameRate(900);
  character = new Character();
  bullet = new Bullet();

  backgroundsound.loop();
  backgroundsound.setVolume(2)
  for(let i = 0; i<bulletNum; i++)
    { 
      bullet[i] = new Bullet();
      
      
      bulletcheck[i] = 0;
      
    }
  for(let i = 0; i<enemyNum; i++)
    { 
      enemy[i] = new Enemy();
    }

}
function touchStarted() {
  getAudioContext().resume();
}
// function firststage(){

// }



//----------------------bullet------------------------------------//
function mousePressed()
{ 
  
  for(let i = 0; i<bulletNum; i++)
    {
      

      if(bulletcheck[i] == 0)
      {
        bullet[i].bulletX = character.x+22.5;
        bullet[i].bulletY = character.y;
        bullet[i].mouse_xy();
        gunsound.play();
        
        bulletcheck[i] = 1;
        break;
      }
    }   
  // if (playcheck==0 ){
  //   button.mousePressed(reset);
  // }   
}



function bulletCheck()
{
  
  for(let i = 0; i<bulletNum; i++)
  { 
    
    bullet[i].draw();
    bullet[i].shoot();
    bullet[i].getRad();
    
  }            
  for(let i = 0; i<bulletNum; i++)
  { 
    
    if(bullet[i].bulletY <30)
    {
      
      bulletcheck[i] = 0;
      
      
      bullet.reset()
    }
  }

}

//----------------------------------------------------------------//




function draw() {
  background(100);
  image(backgroundpng,0,0,width,height);
  
  character.show();
  character.move();
  

  
  //character.mhp();
  bullet.aim();
  // bullet.shoot();
  // bullet.getRad();
  textPrint()

  
  enemyCheck();
  bulletCheck()
  colliMeEnemy()
  colliBulletEnemy()
  hp();




 //reset();
  
  
  EndOfGame()
}






function enemyCheck()
{
  let i = 0;
  while(i<enemyNum)
  {
    enemy[i].display();
    enemy[i].move();
    i++;
  }
  for(let i = 0; i<enemyNum; i++)
  { 
    if(enemy[i].y > height)
    {
      enemy[i].reset();
      SCORE = SCORE - 5
      USERHP--
      hitsound.play();
    }
  } 
}

function colliBulletEnemy()
{
  for(let i = 0; i<enemyNum; i++)
  { 
    for(let j = 0; j<bulletNum; j++)
    {
      let dis = 100;
      if(bulletcheck[j] == 1) 
      {
        dis = dist(bullet[j].bulletX, bullet[j].bulletY, enemy[i].x, enemy[i].y);
      }
      if(dis<25)
      {
        //thrustSound.play();
        print(dis);
        enemy[i].y=-50;
        SCORE = SCORE +2; //점수올라감
        deadsound.play();
        deadsound.setVolume(0.2)
        bulletcheck[j]=0;
        bullet[j].reset();
        if(SCORE<50){
          enemy[i].reset();
        }
        if(SCORE>=50 && SCORE<100 ){
          enemy[i].reset1();
        }
        if(SCORE>=100 && SCORE<150){
          enemy[i].reset2();
        }
        if(SCORE>=150){
          enemy[i].reset2();
        }
        if(SCORE==38){
            knocksound.play();
            knocksound.setVolume(50)
        }
      }
    }
  }
}
function colliMeEnemy()
{
  for(let i = 0; i<enemyNum; i++)
  { 
    let dis = 100;
    dis = dist(character.x+22.5, character.y-22.5, enemy[i].x+12.5, enemy[i].y-12.5);
    if(dis<35)
    {
      print(dis);
      fill(255,0,0);

      USERHP--; // 피깎임
      hitsound.play();
      //print(USERHP)
      enemy[i].reset();
      //warpSound.play();
    } 
    if(dis<36){
      fill(255,0,0)
    }
      
  }
}




//------------------------------------USERHP------------------------------//

function hp(){
  //print(USERHP)
  push();
  rect(character.x-27.5,character.y-30,100,15);
  pop();
  if(USERHP==10){
      push();
      fill(0,255,0);
      rect(character.x-27.5,character.y-30,100,15);
      pop()
  }
  else if(USERHP==9){
      push();
      fill(51,255,0);
      rect(character.x-27.5,character.y-30,90,15);
      pop()
  }
  else if(USERHP==8){
      push();
      fill(102,255,0);
      rect(character.x-27.5,character.y-30,80,15);
      pop()
  }
  else if(USERHP==7){
      push();
      fill(153,255,0);
      rect(character.x-27.5,character.y-30,70,15);
      pop()
  }
  else if(USERHP==6){
      push();
      fill(204,255,0);
      rect(character.x-27.5,character.y-30,60,15);
      pop()
  }
  else if(USERHP==5){
      push();
       fill(255,255,0);
      rect(character.x-27.5,character.y-30,50,15);
      pop()
  }
  else if(USERHP==4){
      push();
       fill(255,192,0);
      rect(character.x-27.5,character.y-30,40,15);
      pop()
  }
  else if(USERHP==3){
      push();
      fill(255,128,0);
      rect(character.x-27.5,character.y-30,30,15);
      pop()
  }
  else if(USERHP==2){
      push();
      fill(255,64,0);
      rect(character.x-27.5,character.y-30,20,15);
      pop()
  }
  else if(USERHP==1){
      push();
      fill(255,0,0);
      rect(character.x-27.5,character.y-30,10,15);
      pop();
  }

}
//------------------------------------------------------------------------//




function keyPressed()
{
  if(key == ' '){
    character.jump();
  }
  if(keyCode == 38){
    character.jump();
  }
  if(keyCode == 87){
    character.jump();
  }
  
  

  

}


function textPrint()
{
  push();
  fill(0,0,0,80);
  rect(0,0,width,30);
  fill(255);
  text("SCORE : "+SCORE, 10, 20);
  text("HP : "+ USERHP, width-50, 20);
  pop();
}

function reset()
{
  playcheck++;
  button.hide();
  let bullet = [];
  let bulletcheck = []
  
  let enemy = [];
  let enemyNum = 5;
  let bulletNum = 10;

  for(let i = 0; i<bulletNum; i++)
  { 
    bullet[i] = new Character();
    bulletcheck[i] = 0;
  }
  for(let i = 0; i<enemyNum; i++)
  { 
    enemy[i] = new Enemy();
  }
}

function EndOfGame()
{
  if(USERHP<=0)
  {
    background(0);
    push();
    fill(0);
    rect(0,0,width,height);
    fill(255);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    text("YOUR SCORE IS :"+SCORE+" SCORE", width/2, height/2+20);
    pop();
    backgroundsound.pause();
    hitsound.pause();
    gunsound.pause();
    hitsound.pause();
  }
  if(playcheck==0)
  {
    background(0);
    push();
    fill(0);
    rect(0,0,width,height);
    fill(255);
    textAlign(CENTER);
    text("Shooting Game", width/2, height/2);
    text("if you want to play the game, plz press the button", width/2, height/2+20);
    pop();
    button.center();
    button.position(width/2-40, height/2+30);
    button.mousePressed(reset);
    
    // backgroundsound.pause();
    hitsound.pause();
    gunsound.pause();
  }  

}