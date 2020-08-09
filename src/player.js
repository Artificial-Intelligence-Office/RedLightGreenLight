class Player {
    constructor(x) {
        this.x = x;
        this.y = startY;
        this.speed = playerSpeed;
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

    move(up) {
        if (up > 0.5) {
            this.y -= this.speed;
        }
    }
}