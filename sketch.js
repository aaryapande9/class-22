const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,30,ground_options);
    World.add(world,ground);

    var box_option={
    restitution:0.5
    }
    box=Bodies.rectangle(200,200,50,50,box_option)
    World.add(world,box);
   


    console.log(ground);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
    rect(box.position.x,box.position.y,50,50);
}
