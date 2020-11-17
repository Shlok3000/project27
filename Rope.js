class Rope {
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    
    }
        display() {
            var posA = this.Rope.bodyA.position
            var posB = this.Rope.bodyB.position
            strokeWeight(4);
            line(posA.x,posA.y, posB.x, posB.y);
        }
            
        
    
    }