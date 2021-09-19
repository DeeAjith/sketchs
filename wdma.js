var seedrandom = require('seedrandom');

const canvasSketch = require('canvas-sketch');
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

var __wdmaData = {
    token: "0xf4b1c66aa9cc2f6df5c42c5d66d533352b3ce96243ab3a564c005e89d107a5e1",
    level: 0,
};
// WDMA inputs
let SEED = __wdmaData.token; // initialize seed fed from html
let LEVEL = __wdmaData.level; // initialize level fed from html

const seeder = seedrandom(SEED.substr(2, 64) + LEVEL);

const res = 2048;
const settings = {
    dimensions: [res, res],
    // animate: true
};

const sketch = () => {
    return ({
        context,
        width,
        height
    }) => {
        let c = context;
        c.fillStyle = '#fff';
        c.fillRect(0, 0, width, height);
        // c.fillStyle = '#' + SEED.substr(random.range(2, 12), 4);

        const w = width * 0.52;
        const h = height * 0.52;
        const cx = width * 0.55;
        const cy = height * 0.55;

        let x, y;

        const count = 100 * (LEVEL + 2) ;
        const angleLevel = [
            Math.sin,
            Math.cos,
            Math.tan,
        ]
        const colors = [
            '#2F9599',
            '#EC2049',
            '#F26B38',
            '#F7DB4F'
          ]
        function anim() {
            for (let i = 0; i < count; i++) {
                for (let j = 0; j < count; j++) {
                    
                    c.save();
                    const seedAngle = math.degToRad((Math.random() * seeder()) * 360);
                    const angle = math.degToRad(seedAngle) * j;
                    x = cx * (width * .2) * angleLevel[Math.round(random.range(0,2))](angle) + Math.sin(angle) ;
                    y = cy * (width * .2) * angleLevel[Math.round(random.range(0,2))](angle);
                    c.beginPath();
                    c.translate(x,y);
                    c.rotate(angleLevel[Math.round(random.range(0,2))](angle));
                    c.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    c.rect(Math.random() * x*1.2, Math.random() * y , Math.random()*(w*.1), Math.random()*(h*.1) )
                    c.arc(Math.random() * x*1.2, Math.random() * y , Math.random()*(w/24) + Math.random()*(h/24), 0,Math.PI*2)
                    c.fill();
                    c.restore();
                }
            }
        }
        anim();
    };
};

canvasSketch(sketch, settings);