class Launcher{
    constructor(body1, point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.05
        }
        this.body= Constraint.create(options)
        World.add(world, this.body)
        this.pointB=point2
    }
    display(){
        //line(x1,y1,x2,y2)
        push()
        if(this.body.pointB){
          strokeWeight(3)
        line(this.body.bodyA.position.x, this.body.bodyA.position.y,this.pointB.x, this.pointB.y )
        }
        pop()
    }
    fly(){
        this.body.bodyA=null
    }
}