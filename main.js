function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();   
}

function draw(){
    fill("skyblue");
    circle(80, 80, 100);
    circle(560, 80, 100);
    circle(80, 400, 100);
    circle(560, 400, 100);
    fill("pink");
    rect(129, 65, 384, 30);
    rect(129, 387, 384, 30);
    rect(65, 125, 30, 230);
    rect(545, 125, 30, 230);    
    image(video, 165, 140, 300, 200);
}


function take_snapshot(){
    save('frame_fame.png');
}

