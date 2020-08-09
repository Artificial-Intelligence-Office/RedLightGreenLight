const WIDTH = 800,
    HEIGHT = 800;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(230);

    stroke(0);
    strokeWeight(2);
    line(10, 10, 10, 790);
    line(10, 10, 790, 10);
    line(790, 10, 790, 790);
    line(10, 790, 790, 790);

    line(10, 50, 790, 50);
    line(10, 740, 790, 740);


}

function draw() {


}