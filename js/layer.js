class Layer {
    constructor() {
        this.lvl = LVL;
        this.numShapes = this.lvl;
        this.angle = 360 / this.numShapes;
        this.sOut = 8;
        this.singleStep = (SHAPE_SIZE / 2) / this.sOut;
        this.thinStroke = 1;
        this.thickStroke = 3;
        this.layerColor = coloRando();
    }
}

class Circles extends Layer {
    constructor() {
        super();

        this.circleSize = (SHAPE_SIZE / 2) * .93;
        this.position = (SHAPE_SIZE / 2) - (this.circleSize / 2);
    }

    render() {
        noFill();
        stroke(this.layerColor);
        strokeWeight(this.thinStroke);
        push();
        translate(width / 2, height / 2);
        for (let i = 0; i <= this.numShapes; i++) {
            ellipse(this.position, 0, this.circleSize);
            rotate(this.angle);
        }
        pop();
    }
}

class SimpleLines extends Layer {
    constructor() {
        super();

        this.nSteps = seedSelect() ? this.sOut : int(this.sOut * 1.25);
        this.step = (SHAPE_SIZE / 2) / this.nSteps;
        this.start = floor(random(0, this.nSteps));
        this.stop = floor(random(this.start, this.nSteps + 1));
        this.numShapes = seedSelect() ? this.lvl : this.lvl * 2;
        this.angle = 360 / this.numShapes;
        this.weight = seedSelect() ? this.thinStroke : this.thickStroke;
    }

    render() {
        noFill();
        stroke(this.layerColor);
        strokeWeight(this.weight)
        push();
        translate(width / 2, height / 2);
        for (let i = 0; i < this.numShapes; i++) {
            line(this.start * this.step, 0, this.stop * this.step, 0);
            rotate(this.angle)
        }
        pop();
    }
}

class OutlineShape extends Layer {
    constructor() {
        super();

        this.weight = seedSelect() ? this.thinStroke : this.thickStroke;
        this.hexTrue = seedSelect();
    }

    render() {
        noFill();
        stroke(this.layerColor);
        strokeWeight(this.weight)
        push();
        translate(width / 2, height / 2);
        if (this.hexTrue) {
            hexagon(0, 0, SHAPE_SIZE / 2);
        } else {
            ellipse(0, 0, SHAPE_SIZE);
        }
        pop();
    }
}

class TestLines extends Layer {
    constructor() {
        super();

        this.numShapes = seedSelect() ? this.lvl : this.lvl * 2;
        this.angle = 360 / this.numShapes;
    }
    render() {
        push();
        translate(width / 2, height / 2);
        noFill();
        stroke(this.layerColor);
        ellipse(0, 0, SHAPE_SIZE);

        stroke(this.layerColor);
        for (let i = 0; i < this.numShapes; i++) {
            rotate(this.angle)
            line(0, 0, 0, SHAPE_SIZE / 2);
        }
        pop();
    }
}

class DotLines extends Layer {
    constructor() {
        super();

        this.numShapes = seedSelect() ? this.lvl : this.lvl * 2;
        this.angle = 360 / this.numShapes;
        this.shapeSize = 3;
        this.centerOffset = this.singleStep;
    }

    render() {
        fill(this.layerColor);
        noStroke();
        push();
        translate(width / 2, height / 2);
        for (let i = 0; i <= this.numShapes; i++) {
            for (let x = this.centerOffset; x < SHAPE_SIZE / 2; x += this.singleStep) {
                rect(x, 0, this.shapeSize);
            }
            rotate(this.angle);
        }
        pop();
    }
}

class CenterdShapes extends Layer {
    constructor() {
        super();

        this.randomShape = random(1);
        this.shapeSize = floor(random(this.sOut / 2, this.sOut)) * this.singleStep;
    }

    render() {
        fill(this.layerColor);
        noStroke();
        push();
        translate(width / 2, height / 2);
        if (this.randomShape < 0.2) {
            rect(0, 0, this.shapeSize * 2);
        } else if (this.randomShape > 0.2 && this.randomShape < 0.6) {
            ellipse(0, 0, this.shapeSize * 2);
        } else if (this.randomShape >= 0.6) {
            rotate(this.angle / 2)
            hexagon(0, 0, this.shapeSize);
        }
        pop();
    }
}

class RingOfShapes extends Layer {
    constructor() {
        super();

        this.randomShape = random(1);
        this.shapeSize = floor(random(this.sOut / 2, this.sOut)) * this.singleStep;
    }
    render() {
        push();
        translate(width / 2, height / 2);
        for(let i = 0; i < this.numShapes; i++) {
            polygon(0,0,this.shapeSize,3);
        }
        rotate(this.angle);
        pop();
    }
}