class Player {
    constructor(x) {
        this.x = x;
        this.y = startY;
    }


    draw() {
        push();
        stroke(0);
        strokeWeight(1);
        translate(this.x, this.y);
        fill(234, 100, 180);
        ellipse(0, 0, playerRad);
        pop();
    }
}