class Character{
    constructor(){
        this.r = 45;
        this.x = this.r;
        this.y = height-this.r;
        this.vy = 0;
        this.gravity = 0.8;
        
       
    }
    jump(){
        if(this.y == height-this.r){
            this.vy = -15;
        }  
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y,0,height-this.r);
        this.x = constrain(this.x,0,width-this.r);
        // if(keyIsDown(LEFT_ARROW)){
        //     this.x-=5;
        // }
        // if(keyIsDown(RIGHT_ARROW)){
        //     this.x+=5;
        // } 
     
        if(keyIsDown(65)){
            this.x-=5;
        }
        if(keyIsDown(68)){
            this.x+=5;
        }
        if(keyIsDown(65)&&keyIsDown(16)){
            this.x-=6;
        }
        if(keyIsDown(68)&&keyIsDown(16)){
            this.x+=6;
        }
       
    }
    show(){
        image(characterpng,this.x,this.y,this.r,this.r);
        fill(255,255,255);
    }
    
   

}