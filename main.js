function preload(){
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4Ey0ONPPj/model.json",modelloaded);
}
function modelloaded(){
    console.log("modelloaded");
}
function draw(){
   image(video,0,0,400,300);
   classifier.classify(video,getresult);
}
function getresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
