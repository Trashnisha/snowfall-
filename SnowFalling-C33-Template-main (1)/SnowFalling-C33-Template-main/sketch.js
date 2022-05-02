var ice=[]

function preload (){
  bg=loadImage("snow2.jpg")


}

function setup() {
  createCanvas(800,400);
engine=Matter.Engine.create()
world=engine.world
}

function draw() {
  background(bg);  
  Matter.Engine.update(engine)
  if(frameCount%5===0){
    ice.push(new snow(random(0,800),30,30))
  }
  for(var j=0;j<ice.length;j++){
ice[j].display()
  }
}