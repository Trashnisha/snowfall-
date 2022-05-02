class snow{
    constructor(x,y,r){
var opt={
    restitution:0.4
}
this.r=r
this.image=loadImage("snow4.webp")
this.body=Matter.Bodies.circle(x,y,this.r,opt)
Matter.World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        imageMode (CENTER)
        image (this.image,0,0,this.r,this.r)
        pop ()
        
    }

}