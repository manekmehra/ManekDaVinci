const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var drawin = [],ddrawing = []
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
database = firebase.database()

   
}

function draw(){
    background(0);
    readData()
    beginShape()
    stroke("white")
    strokeWeight(4)
    noFill()
    for (var i =0;i<ddrawing.length; i++){
        vertex(ddrawing[i].x,ddrawing[i].y)
        endShape()
    }
    if (keyDown("c")){
        clear()
    }
}
function mouseDragged(){
    var point = {x:mouseX,y:mouseY}
    drawin.push(point)
    
    database.ref('draw').set({d:drawin})

}
function readData(){
    database.ref('draw/').on("value",(data)=>{
        ddrawing = data.val().d
    })
}