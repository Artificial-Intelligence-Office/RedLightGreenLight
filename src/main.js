// Canvas settings
const WIDTH = 800,
    HEIGHT = 800;

// Board settings
const BORDER = 10,
    START_GAP = 100;

//player settings
const startY = HEIGHT - BORDER - (START_GAP / 2), //start the player at middle of start zone
    playerRad = 30;

let p;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    p = new Player(50);
}

function draw() {
    background(230);
    drawBoard();
    p.draw();
}

function drawBoard() {
    stroke(0);
    strokeWeight(2);
    line(BORDER, BORDER, BORDER, HEIGHT - BORDER);
    line(BORDER, BORDER, WIDTH - BORDER, BORDER);
    line(WIDTH - BORDER, BORDER, WIDTH - BORDER, HEIGHT - BORDER);
    line(BORDER, HEIGHT - BORDER, WIDTH - BORDER, HEIGHT - BORDER);

    fill(200);
    rect(BORDER, BORDER, WIDTH - (2 * BORDER), START_GAP);
    rect(BORDER, HEIGHT - BORDER - START_GAP, WIDTH - (2 * BORDER), START_GAP);

    line(BORDER, BORDER + START_GAP, WIDTH - BORDER, BORDER + START_GAP);
    line(BORDER, HEIGHT - BORDER - START_GAP, WIDTH - BORDER, HEIGHT - BORDER - START_GAP);

    push();
    textAlign(CENTER, CENTER);
    textSize(46);
    noStroke();
    fill(0);
    text("START", WIDTH / 2, HEIGHT - BORDER - (START_GAP / 2));
    text("END", WIDTH / 2, BORDER + (START_GAP / 2));
    pop();
}