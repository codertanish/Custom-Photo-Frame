function preload() {
}

function setup() {
    createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    stroke(0, 0, 0);
    fill(13, 150, 255)
    rect(50, 87.5, 300, 25);
    fill(0, 255, 251)
    rect(50, 100, 25, 250);
    fill(255, 0, 247)
    rect(350, 87.5, 25, 250);
    fill(255, 221, 0)
    rect(50, 337.5, 300, 25);
    
    fill(255, 94, 0);
    circle(50, 100, 75);
    fill(255, 0, 0);
    circle(350, 100, 75);
    fill(31, 207, 78);
    circle(50, 350, 75);
    fill(29, 44, 207);
    circle(350, 350, 75);
    fill(29, 44, 207);

    image(video, 75, 112.5, 275, 225);

}

function take_snapshot() {
    save("CustomPhotoFrame.png");
}