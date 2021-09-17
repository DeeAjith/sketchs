const canvasSketch = require('canvas-sketch');
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const canvasSize = 2000;

const settings = {
  dimensions: [canvasSize, canvasSize]
};

const sketch = () => {
  return ({
    context,
    width,
    height
  }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#d4d4d4'
    context.strokeStyle = '#d4d4d4'


    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    // const count = Math.random()*126;
    let some=40000;
    const count = some;
    const radiusOff = width * 0.3;

    function anim() {
      // requestAnimationFrame(anim)
      for (let i = 0; i < count; i++) {
        const slice = math.degToRad(360 / count);
        const angle = slice * i;
        // let rand = Math.round(Math.random() * angle);
        x = cx + radiusOff * Math.sin(angle) * Math.cos(Math.random()*(angle));
        y = cy + radiusOff * Math.cos(-angle) + Math.sin(Math.random()*(angle));

        context.save();
        context.translate(x, y);  
        context.rotate(Math.sin(-angle));
        context.scale(random.range(0.1, .2), random.range(0.1, .1));

        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h *.25), w*.04, h*.5);
        context.fill();
        context.restore();
        x = cx + radiusOff * Math.cos(angle) + Math.sin(Math.random()*(angle));
        y = cy + radiusOff * Math.sin(angle) + Math.cos(Math.random()*(angle));

        context.save();
        context.translate(x, y);
        context.rotate(Math.cos(-angle));
        context.scale(random.range(0.1, .5), random.range(.02, .2));

        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h *24), w*.04, h*.2);
        context.fill();
        context.restore();
        
        context.save();
        context.translate(cx, cy);
        context.rotate(Math.round(Math.random()*12)+Math.sin(-angle));

        context.lineWidth = random.range(5, 300);
        context.scale(random.range(1, 1.5), .9);

        context.beginPath();
        context.arc(0, 0, radiusOff/2 * random.range(0, .8), slice * 0.1, slice * 2);
        context.stroke();

        context.restore();

        context.save();
        context.translate(cx, cy);
        context.rotate(Math.tan(-angle));

        context.lineWidth = random.range(5, 20);
        // context.scale(.2, 2);
        context.scale(random.range(1, 1.5), .8);

        context.beginPath();
        context.arc(0, 0,radiusOff /2* random.range(0.8, 1.3), slice *.1, slice * 2);
        context.stroke();

        context.restore();
        context.save();
        context.translate(cx, cy);
        context.rotate(-angle);

        context.lineWidth = random.range(5, 10);
        context.scale(random.range(1.2, Math.round(Math.random()*1.5)), random.range(1.1, 1.3));
        context.beginPath();
        context.arc(0, 0, radiusOff * random.range(0.8, 1.3), slice *.1, slice * 2 );
        // context.stroke();

        context.restore();
      }

    }
    anim()
  };
};

canvasSketch(sketch, settings);