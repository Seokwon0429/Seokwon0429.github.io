// function setup() {
//   createCanvas(1000, 900);
//   background(220)
// }

// function draw() {
  
//   if(mouseIsPressed){
//       print("pop!");
//       fill(0);
//   }
//   else{
//       fill(255);
//   }
//   ellipse(mouseX,mouseY,80,80);
// }








// let x = 0, velocity =1;
// function setup(){
//   createCanvas(300,300);

// }
// function draw(){
//   background(0);
//   stroke(255);
//   line(x,0,x,height);
//   x += velocity;
//   if(x<0 || x>width){
//     velocity *= -1;
//   }
//   if(x < 100 || x>200){
//     ellipse(width/2,height/2,100,100);
//   }
// }
// let x,y,d,r = 50.0, tx = 0.0, ty = 0.5;
// function setup(){
//   createCanvas(300,300);
//}
// function draw(){
//   background(0);
//   //x = noise(tx) * width;
//   //y = noise(ty) * height;
//   x = mouseX;
//   y = mouseY
//   d = dist(width/2, height/2,x,y);
//   if(d<r){
//     fill(random(255),random(255),random(255),200);
//   }
//   ellipse(mouseX,mouseY,r,r);
//   ellipse(width/2, height/2, r,r);
//   tx += 0.01;
//   ty += 0.01;
//}






// let interval = 0, current_time = 0, previous_time = 0;
// function setup(){
//   createCanvas(300,300);

// }
// function draw(){
//   background(0);
//   current_time = millis();
//   interval = current_time - previous_time;
//   if(interval>1000){
//     previous_time = millis();
//     fill(random(255),random(255),random(255));

//   }
//   ellipse(width/2, height/2, 200, 200);
// }







//  let x = 150;
//  let y = 150;

//  function setup(){
//    createCanvas(300,300);
//  }
//  function draw(){
//    background(0);
//    stroke(255);
//    line(mouseX,0,mouseX,height);
//    line(0,mouseY,width,mouseY);
//    ellipse(x,y,30,30);
//   if(mouseX>x){
//      x++;
//    } 
//    else{
//      x--;
//    }
//    if(mouseY>y){
//      y++;
//    } 
//    else{
//      y--;
//    }
  
//  }






//  let x = 20;
//  let y = 0;
//  let velocity_x = 3;
//  let velocity_y = 10;

//  function setup(){
//    createCanvas(300,300);
//    background(0);
//  }
//  function draw(){
   
//    ellipse(x,y,30,30);
//    x = x + velocity_x;
//    y = y + velocity_y;

//   if(width<x){
//      velocity_x *= -1;
//    } 
//   else if(x<0){
//      velocity_x *= -1
//    }
  
//   if(height<y){
//     velocity_y *= -1;
//   } 
//   else if(y<0){
//     velocity_y *= -1
//   }
  
//  }







// let check = 0;
// let checkPrev = 0;
// function setup(){
//   createCanvas(500,500);
//   fill(255,255,0);
// }
// function draw(){
//   background(0);
//   display(mouseX,mouseY);
// }

// function display(x,y){
//   if(y< height/2&&x<width/2){
//     rect(0,0,width/2,height/2); //왼쪽위
//     check = 1;
//   }
//   if(y< height/2&&x>width/2){
//     rect(width/2,0,width,height/2); //오른쪽위
//     check = 2;
//   }
//   if(y> height/2&&x<width/2){
//     rect(0,height/2,width/2,height); //왼쪽 밑
//     check = 3;
//   }
//   if(y>height/2&&x>width/2){
//     rect(width/2,height/2,width,height); //오른쪽 밑
//     check = 4;
//   }
//   if(checkPrev != check){
//     print("yes");
//     fill(random(255),random(255),random(255));
//     checkPrev=check;
//   }
// }




// //마우스 눌렀을때 색이 바뀜
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if(mouseIsPressed && (mouseButton===LEFT)){
//     fill(255,0,0);
//   }
//   else if(mouseIsPressed && (mouseButton===RIGHT)){
//     fill(0,255,0);
//   }
//   else{
//     fill(0,0,255);
//   }
//   ellipse(width/2,height/2,200,200);
// }



// // 방향키가 아닌 다른 키를 눌렀을때 상태 변화 
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if(keyIsPressed && ((key === 'A')||(key == 'a'))){
//     fill(255,0,0);
//   }
//   else if(keyIsPressed && (key ==='2')){
//     fill(0,255,0);
//   }
//   else{
//     fill(0,0,255)
//   }
//   ellipse(width/2,height/2,200,200)

// }




// //숫자키에따른 원의 각도변화
// let degree =90;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if(keyIsPressed){
//     if((key >= '0')&&(key<='9')){
//       degree = map(key,'0','9',0,360);
//     }
//   }
//   arc(width/2,height/2,200,200,0,radians(degree));
// }

// //키누른거에 따른 원의 이동 
// let x = 150, y = 150;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if(keyIsPressed){
//     if(key === 'a'){
//      x = x-5;
//     }
//     else if(key === 'd'){
//       x = x+5;
//     }
//     else if(key === 'w'){
//      y = y-5;
//     }
//    else if(key === 's'){
//      y = y+5;
//     }
//   }
//   ellipse(x,y,100,100)
// }




// //키 누른거에따른 텍스트 등장
// function setup(){
//   createCanvas(300,300);
//   textSize(100);
//   textAlign(CENTER);
// }
// function draw(){
//   background(0);
//   fill(255);
//   // if(key =='a'){
//   //   text('a',width/2,height/2);
//   // }
//   // else if(key =='b'){
//   //   text('b',width/2,height/2);
//   // }
//   // else if(key =='c'){
//   //   text('c',width/2,height/2);
//   // }
//   // else{
//   //   text('None',width/2,height/2);
//   // }

//   switch(key){
//     case 'a':
//       text('a',width/2,height/2);
//       break;
//     case 'b':
//       text('b',width/2,height/2);
//       break;
//     case 'c':
//       text('c',width/2,height/2);
//       break;
//     default:
//       text('None',width/2,height/2);
//       break;
//     }
// }








let x = 20, y = 80, w = 460, h=50;
let size = 100, slider = 20;

function setup(){
  createCanvas(500,500);
}
function draw(){
  background(0);
  if(mouseIsPressed){
    if((x <= mouseX && mouseX<= x+w)&&(y <= mouseY && mouseY<= y+h)){
      slider = mouseX;
      size = map(slider,x,x+w,100,width);
    }
  }
  fill(0,0,255);
  ellipse(width/2,height/2,size,size);
  
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('Size:'+ int(size),width/2,50);
  rect(x,y,w,h);
  fill(255,0,0);
  rect(slider,y,10,h)
}







