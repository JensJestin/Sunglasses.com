EarX = 0;
EarY = 0;

function preload(){
img = loadImage("https://i.postimg.cc/NjHtVzC3/sunglasses-removebg-preview.png")
}

function setup(){
canvas = createCanvas(400, 450);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialzed');
}

function draw(){
image(video, 0, 0, 400, 450);
image(img, EarX, EarY+15, 200, 80)
}


function take_snapshot(){    
  save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        EarX = results[0].pose.rightEar.x;
        EarY = results[0].pose.rightEar.y;
        console.log("rightEar x = " + results[0].pose.rightEar.x);
        console.log("rightEar y = " + results[0].pose.rightEar.y);
    }
}
