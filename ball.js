class Ball{
    constructor(x,y,radius){
        

        var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0
        }
        this.image = loadImage("polygon.png");
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body); 
  }

display(){
    push()
    var pos = this.body.position;
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    fill("red")
    ellipseMode(CENTER);
    ellipse(0,0,this.radius*2);
    pop();
}
}
