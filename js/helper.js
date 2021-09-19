function hexagon(posX, posY, radius) {
    const rotAngle = 360 / LVL;
    beginShape();
    for (let i = 0; i < LVL; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}
function polygon(posX, posY, radius, nGon) {
    const rotAngle = 360 / nGon;
    beginShape();
    for (let i = 0; i < LVL; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}
function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle);
    const y = posY + radius * sin(angle);
    return createVector(x, y);
}

function seedSelect() {
    const seedRando = random(1 + seeder());
    // console.log(seedRando)

    if (seedRando > 0.5) {
        return true
    } else {
        return false
    }
}

function coloRando() {
    const coloRando = floor(random(0, COLORS.length));
    return COLORS[coloRando];
}