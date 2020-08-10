class Player {
    constructor(genome, x) {
        this.brain = genome;
        this.x = x;
        this.y = startY;
        this.speed = playerSpeed;
        this.alive = true;
    }


    draw() {
        push();
        stroke(0);
        strokeWeight(1);
        translate(this.x, this.y);
        if (this.alive) fill(234, 100, 180);
        if (!this.alive) fill(256, 140, 10);
        ellipse(0, 0, playerRad);
        pop();
    }

    move(up) {
        if (this.alive) {
            if (this.y > (BORDER + START_GAP - playerRad)) {
                if (up > 0.5) {
                    if (LIGHT == "Green" || LIGHT == "Orange") {
                        this.y -= this.speed;
                    } else {
                        this.alive = false;
                    }
                }
            }
        }
    }
}