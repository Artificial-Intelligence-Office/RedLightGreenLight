// Canvas settings
const WIDTH = 800,
    HEIGHT = 800;

// Board settings
const BORDER = 10,
    START_GAP = 50;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background(230);
    drawBoard();
}

function drawBoard() {
    stroke(0);
    strokeWeight(2);
    line(BORDER, BORDER, BORDER, HEIGHT - BORDER);
    line(BORDER, BORDER, WIDTH - BORDER, BORDER);
    line(WIDTH - BORDER, BORDER, WIDTH - BORDER, HEIGHT - BORDER);
    line(BORDER, HEIGHT - BORDER, WIDTH - BORDER, HEIGHT - BORDER);

    line(BORDER, BORDER + START_GAP, WIDTH - BORDER, BORDER + START_GAP);
    line(BORDER, HEIGHT - BORDER - START_GAP, WIDTH - BORDER, HEIGHT - BORDER - START_GAP);
}