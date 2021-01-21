bodyX=0;
bodyY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/1zvWRdtf/glasses.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose,bodyX-65,bodyY-15,90,30);
}
function take_snapshot(){
    save('IAmASpecyBoy.png');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        bodyX=results[0].pose.leftEye.x;
        bodyY=results[0].pose.leftEye.y;
        console.log("nose x ="+bodyX);
        console.log("nose y ="+bodyY);
    }
}