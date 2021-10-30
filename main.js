status="";

function setup(){
    canvas= createCanvas(400,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    object_detector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";


}
   
function modelLoaded(){
    console.log("Model is Loaded ");
    status=true;
}

function draw(){
    image(video,0,0,400,380);
}