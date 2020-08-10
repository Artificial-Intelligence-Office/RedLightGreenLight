class Player {
    constructor(genome, x) {
        this.brain = genome;
        this.brain.score = 0;
        this.x = x;
        this.y = startY;
        this.speed = playerSpeed;
        this.alive = true;
        this.done = false;
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

    move() {
        let input = [];
        if (LIGHT == "Green") input.push(0);
        else if (LIGHT == "Orange") input.push(0.5);
        else if (LIGHT == "Red") input.push(1);

        let output = this.brain.activate(input);
        if (this.alive) {
            if (this.y > (BORDER + START_GAP - playerRad)) {
                if (output[0] > 0.5) {
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