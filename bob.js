class bob{
    constructor(x, y, r) {
        var options = {
            'friction':1.2,
            'density':1.0
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y, this.r);
        rotate(angle);
        ellipse(0, 0, this.r, this.r);
        stroke("black")
        fill("pink")
        pop();
      }
}