img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('CocoSsd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
function draw(){
    image(img,0,0,640,420);
    fill('#228B22');
    text("Dog",45,75);
    noFill();
    stroke('#228B22');
    rect(30,60,450,350);
    fill('#228B22');
    text("Cat",400,100);
    noFill();
    stroke('#228B22');
    rect(270,90,350,500);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status="true";
    objectDetector.detect(img,gotResult);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
    }
