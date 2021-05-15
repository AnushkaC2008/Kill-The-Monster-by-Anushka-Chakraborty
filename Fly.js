class Fly{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.fly=Constraint.create(options);
        World.add(world,this.fly);
    }
    display(){
        var pointA = this.fly.bodyA.position;
        var pointB = this.fly.bodyB.position;
        strokeWeight(4);
        var PX = pointA.x;
        var PY = pointA.y;

        var SX = pointB.x+this.offsetX;
        var SY = pointB.y+this.offsetY;
        line(PX, PY, SX, SY);
    }
}