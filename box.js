class Box{
    constructor(color,velX){
        this.x = 100
        this.y = 100
        this.w = 30
        this.h = 30
        this.color =  color
        this.velX = velX
       
      
        fill(this.color)
    }
    display(c){
        fill (c)
        this.x = this.x + this.velX
        rect(this.x,this.y,this.w,this.h)
    }
    setVelX(){
       
        
    }  
    bounceOff(){
        console.log("run")
        var x = this.velX
        x  = x*(-1)  
        
        this.velX = x
      
    
    }
}