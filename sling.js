class Sling{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1,
angularstiffness:1,
lenght= 220,
}
this.pointB=this.pointB;
this.pointX=bodyA.x;
this.pointY=bodyA.y - 250;
this.sling = Constarint.create(options);
World.add(world,this.sling);
}
display(){
if(this.sling.bodyA){
var pointA= this.sling.bodyA.position;
var pointB= this.pointB;
push();
strokeWeight(3.5);
stroke("#fff");
line(pointB.x,pointB.y,bodyA.x,bodyB.y);
pop();
}
}
}

canvas= createCanvas(windowWidth/2,windowHeight/1.5)
engine = Engine.create();
world = engine.world;


let canvasmouse= Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options={
mouse:canvasmouse
}
mConstraint= MouseConstraint.create(engine,options);
World.add(world,mConstraint);




