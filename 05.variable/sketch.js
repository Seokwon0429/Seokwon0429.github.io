// let x = 75;
// let y = 50;
// let d1 = 40;
// let d2 = 40;


// // function setup() {
// //   createCanvas(1920, 1027);
// // }

// // function draw() {
// //   background(220); 
// //   ellipse(x,y,d1,d2);
// //   x = x + 1;
// //   ellipse(x+100,y,d1,d2);

//   ellipse(x+200,y,d1,d2);

// // }

// let x1;
// let x2;
// let y;

// x1 = 50;
// x2 = 250;
// y = 60;

// function setup() {

// createCanvas(300,300);
// }
// function draw(){
//   background(200);
//   line(x1,y,x2,y);
//   line(x1,y*2,x2,y*2);
//   line(x1,y*3,x2,y*3);
//   line(x1,y*4,x2,y*4);
//   print(y);
//   y = y+999;
//   print(y);
//   y %= 300;
//   console.log();

//   print("/n"+y);
// }
// let x = 10;
// let y = 10;
// let d1 = 40;
// let d2 = 40;
// let r = 0;
// let g = 0;
// let b = 0;

// function setup() {
//   createCanvas(300, 300);
//  }

// function draw() {
//   background(220); 
//   fill(r,g,b);
//   r = r+10;
//   if(c=255){
//     g = g+1;
//   }
//   if(g=255){
//     b = b+1;
//   }
//   r %= 99999999999999999999999;
//   ellipse(150,150,d1,d1);
//   ellipse(150,150,d2,d2);
  
//   d1 = d1 +15;
//   d2 = d2 + 5;
//   d1 %= 300;
//   d2 %= 300
//   console.log();
//}
let x = 300, y = 200, c = 0, d=100;
let theta = 0.0;
function setup(){
  createCanvas(1800,400);
}
function draw(){
  
  background(0);
  stroke(255,255,0);
  strokeWeight(5);
  line(0,y+d/2,1800,y+d/2);

  let x = width/2 + width/2* sin(theta);

  fill(c,0,0);
  c= c+70;
  c%=700;
  ellipse(mouseX,y,d,d);
  ellipse(mouseX+d,y,d,d);
  theta += -0.009;
  
  noFill();
  
  
  triangle(mouseX,y,mouseX+d/2,y-d,mouseX+d,y);
  

  strokeWeight(1);
  stroke(255);
  fill(255);
  textSize(20);
  text("distance :"+x,100,50);
  text("color :"+c,400,50);

  print("distance \"영의\" \n \"메롱\" \\");

  

  
  
}