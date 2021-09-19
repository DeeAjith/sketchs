// [WDMA.] variables
let SEED = __wdmaData.token; // initialize seed fed from html
let LEVEL = __wdmaData.level; // initialize level fed from html

// Global variables
let SHAPE_SIZE = 500;
let LVL = 3 * (LEVEL + 1);
let COLORS = [];
let LAYERS = [];

let seeder = new Math.seedrandom(SEED.substr(2, 64));

function wdmaFeatures() {
    window.__wdmaMetadata = {
        "Eye color": "blue",
        "Hair color": "grey"
    };
    window.__wdmaMetadataRendered = true;
}

function setup() {
    createCanvas(530, 530, SVG);
    noLoop();
    noFill();
    COLORS = [
        '#C3015C',
        '#072F5F'
    ]
    angleMode(DEGREES);
    rectMode(CENTER);
}


function draw() {
    const testLines = new TestLines();
    testLines.render();
    const nGon = new RingOfShapes();
    nGon.render();
    // const dot = new DotLines();
    // dot.render();
    // const centershape = new CenterdShapes();
    // centershape.render();

    // let picker = random(1);
    // if (picker > 0.3) {
    //     LAYERS.push(new SimpleLines);
    // }

    // picker = random(1);
    // if (picker > 0.3) {
    //     LAYERS.push(new OutlineShape);
    // }
    // picker = random(1);
    // if (picker > 0.3) {
    //     LAYERS.push(new Circles);
    // }
    // LAYERS.forEach(layer => {
    //     layer.render();
    // });

    wdmaFeatures();
}
