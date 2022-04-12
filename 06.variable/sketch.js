
// let x = 30, y = 30;
// let velocity_x =3, velocity_y = 1;
// let accel_x = 0.2, accel_y=0.2;
// let friction = 0.99;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(120);
//   print(y);
// }

// function draw() {
//   background(200);
//   ellipse(x,y,30,30);
//   x += velocity_x;
//   y += velocity_y;

//   velocity_x *= friction;
//   velocity_y *= friction;

  //textSize(15);
  //text(frameCount + ':' + frameRate(),10,30);

// }

// let x = 200 ,y = 200;
// let d = 30;
// let theta = 0.0;
// function setup(){
//     createCanvas(400,400);
//     frameRate(220);

// }
// function draw(){
//   background(200);
//   let y = height/2 + height/2* sin(theta);
//   //let y = map(sin(theta),-1,1,0,height);
//   //let d = height/2 + height/2* sin(theta);
//   line(0,0,x,y);
//   line(400,0,x,y)
//   line(x,y-d,x,y+d);
  
//   ellipse(x,y,d,d);
//   theta += -0.1;

//   textSize(15);
//   text(frameCount + ':' + frameRate(),10,30);
// }


// function setup(){
//   createCanvas(1920,1001);
//   background(0);

// }
// function draw(){
  
//   strokeWeight(random(5));
//   stroke(random(255),random(255),random(255));
//   print(mouseX,mouseY);
//   point(mouseX,mouseY);
//   //ellipse(mouseX,mouseY,80,80);
//   line(pmouseX,pmouseY,mouseX,mouseY);
// }


// function setup(){
//   createCanvas(1920,1001);
//   background(0);

// }
// function draw(){
  
//   strokeWeight(5);
//   stroke(255,255,0);
//   print(mouseX,mouseY);
//   point(mouseX,mouseY);
//   //ellipse(mouseX,mouseY,80,80);
//   line(pmouseX,pmouseY,mouseX,mouseY);
// }

// let theta = 0.0, r=0.0;
// function setup(){
//   createCanvas(900,900);
//   background(0);

// }
// function draw(){
//   r=r+0.1;
//   let x = width/2 + r* cos(theta);
//   let y = height/2 + r* sin(theta);
//   ellipse(x,y,90,90);
//   theta += 0.1;
// }