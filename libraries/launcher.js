class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.007,
            length:1
        }
        this.bodyA=bodyA;
        this.pointB.pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(body){
        this.launcher.bodyA=body;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointb;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
} 