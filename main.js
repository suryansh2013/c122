function preload() {
    
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 100, 100, 440, 280);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(25, 50, 50, 405);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(50, 405, 565, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0);
    rect(565, 25, 50, 405);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(25, 25, 565, 50);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(25, 50, 50, 25);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(590, 430, 50);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    circle(50, 430, 50);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(50, 50, 50);
}
function take_snapshot() {
    save('birthday.png');
}