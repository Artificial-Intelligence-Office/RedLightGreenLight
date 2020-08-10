// Canvas settings
const WIDTH = 800,
    HEIGHT = 800;

// Board settings
const BORDER = 10,
    START_GAP = 100;

const PLAYERS = 100;
let p = [];

let LIGHT = "Orange";
let newLIGHT = "Green";
const OrangeTime = 30; //how many frames we stay on orange
let OrangeCounter = 0;
let ChangeProb = 0.01; //prob to change the colors every frame

let frameCounter = 0;


let gap = WIDTH - (4 * BORDER);
let playerSpawnGap = gap / PLAYERS

//player settings
const startY = HEIGHT - BORDER - (START_GAP / 1.25), //start the player at middle of start zone
    playerRad = playerSpawnGap * 2,
    playerSpeed = 5;



function setup() {
    createCanvas(WIDTH, HEIGHT);
    initNeat();
    startEvaluation();
}

function draw() {
    frameCounter++;
    background(230);
    changeLight();
    drawBoard();
    for (let i = 0; i < p.length; i++) {
        p[i].draw();
        p[i].move();
    }
    checkNeat();
}

//randomly change the light
function changeLight() {
    if (OrangeCounter > 0) {
        LIGHT = "Orange";
        OrangeCounter -= 1;
    }
    else if (random() < ChangeProb) {
        newLIGHT = ((LIGHT == "Red") ? "Green" : "Red");
        OrangeCounter = OrangeTime;
    } else if (OrangeCounter <= 0) {
        OrangeCounter = 0;
        LIGHT = newLIGHT;
    }
}

function checkNeat() {
    allDead = true
    allDone = true
    for (let i = 0; i < p.length; i++) {
        if (p[i].alive) allDead = false;
        if (!p[i].done) allDone = false;
    }
    if (allDead || allDone) endEvaluation();

    if (frameCounter > ITERATIONS) {
        endEvaluation();
    }

    for (let i = 0; i < p.length; i++) {
        if (p[i].y < (BORDER + START_GAP - playerRad) && p[i].done == false) {
            p[i].brain.score = (ITERATIONS - frameCounter) ** 2;
            p[i].done = true;
            console.log("END REACHED");
        }
    }
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
    text("START", WIDTH / 2, HEIGHT - BORDER - (START_GAP / 3));
    text("END", WIDTH / 2, BORDER + (START_GAP / 3));
    pop();

    push();
    if (LIGHT == "Red") fill(255, 0, 0, 25);
    if (LIGHT == "Green") fill(0, 255, 0, 25);
    if (LIGHT == "Orange") fill(255, 255, 0, 25);

    noStroke();
    rectMode(CENTER);
    rect(WIDTH / 2, HEIGHT / 2, (WIDTH - (2 * BORDER)), (HEIGHT - (2 * BORDER) - (2 * START_GAP)));
    pop();
}