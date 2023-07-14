
var box1,box2
function setup(){
  createCanvas(400,400)
  box1 = new Box("red",3)
  box2 = new Box("blue",-3)
 
 box2.x = 300
  

}
function draw(){
  background("cyan")
  box1.display("red")
  box2.display("green")
 
  isTouching(box1.x,box1.y,box2.x,box2.y)
}
function  isTouching(x1,y1,x2,y2){

  var distance = dist(x1,y1,x2,y2)
  
  if(distance <= 20){
    box1.bounceOff()
    box2.bounceOff()
  }
}

