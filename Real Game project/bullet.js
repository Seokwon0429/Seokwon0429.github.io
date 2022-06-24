class Bullet{
    constructor(){
        this.bulletX = 0;
        this.bulletY = 0;

        this.x1 = character.x;
        this.y1 = character.y;
        this.bulletD =10;
        this.bulletalpa = 255;
        this.x2 = 0;
        this.y2 = 0;

        this.x2m = 0;
        this.y2m = 0;

        this.dy = 0;
        this.dx = 0;

        this.locX = 0;
        this.locY = 0;

        this.rad = [];
        this.speed = 5;
        // this.getRad = getRad(0,0,0,0);
    }
    draw(){
       
        push();
        fill(250, 50, 50);
        ellipse(this.bulletX,this.bulletY,this.bulletD);
        pop();

       
    }
    shoot(){ 
        
        this.x2 = this.x2m;
        this.y2 = this.y2m;
        

        this.bulletX = this.bulletX +this.locX;
        this.bulletY = this.bulletY +this.locY;
        
        this.rad=bullet.getRad(this.bulletX,this.bulletY,this.x2,this.y2);
        //print(this.rad);
        this.locX= (this.speed * cos(this.rad));
        this.locY= (this.speed * sin(this.rad));
       
       
    }
    getRad(x1=this.x1, y1=this.y1, x2 = this.x2, y2 = this.y2) {
        this.dy = y2-y1;
        this.dx = x2-x1;
        
          return  Math.atan2(this.dy,this.dx);
      
          
      }
    reset(){
        this.bulletX = -999999;
        this.bulletY = 99;
    }
    mouse_xy(){
        this.x2m = mouseX;
        this.y2m = 15;
    }
    aim(){
        image(aimpng,mouseX-15, 0, 30, 30);
    }
   
}
// function keyPressed(){

// }
