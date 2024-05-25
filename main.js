song1 = "";
song2 = "";

function preload() {
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(650 , 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Intitialized!");
}

function draw() {
    image(video, 0, 0, 650, 400);
}








//function play() {
 //   song.play();
  //  document.getElementById("pause_btn").style.display="inline-block";
  //  document.getElementById("play_btn").style.display = "none";

 //   song.setVolume(1);
   // song.rate(1);
//}   //

//function pause() {
   // song.pause();
 //   document.getElementById("play_btn").style.display="inline-block";
   // document.getElementById("pause_btn").style.display = "none";
//}   //

