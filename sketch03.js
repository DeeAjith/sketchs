const canvasSketch = require('canvas-sketch');
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const res = 2048;
const settings = {
  dimensions: [res, res]
};

const sketch = () => {
  return ({
    context,
    width,
    height
  }) => {
    let c = context;
    c.fillStyle = '#E11845';
    c.fillRect(0, 0, width, height);
    c.fillStyle = '#F2CA19';

    const w = width * 0.0055;
    const h = height * 0.05;
    const cx = width * 0.5;
    const cy = height * 0.5;

    let x, y;

    const count = 60000;
    const radiusOff = width * 0.5;

    function anim() {
      // requestAnimationFrame(anim)
      for (let i = 0; i < count; i++) {
        const slice = math.degToRad(360 / count);
        const angle = slice * i;
        let rand = Math.round(Math.random() * angle * 24);
        x = cx + radiusOff*1.2 * Math.cos(rand) * Math.cos(Math.random() + (angle));
        y = cy + radiusOff*1.2 * Math.cos(-rand) + Math.cos(angle);
        
        context.save();
        context.translate(x, y);
        context.rotate(Math.cos(-angle));
        context.scale(w*0.08,-h*.01);
        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h * .25), w * .04, h * .5);
        context.fill();
        context.restore();

        context.save();
        x = cx + radiusOff * Math.tan(angle) * Math.cos(Math.random() + (angle));
        y = cy + radiusOff * Math.cos(-angle) * Math.cos(angle);
        context.translate(y, x);

        context.beginPath();
        context.rotate(Math.cos(-angle)); 
        context.scale(w*0.05,h*.08);
        context.rect(-w * 0.5, random.range(0, -h * .25), w * .04, h * .5);
        // context.fill();
        context.restore();
        x = cx + radiusOff*1.2 * Math.tan(-angle) * Math.cos(Math.random() + (angle));
        y = cy + radiusOff*1.2 * Math.cos(angle) * Math.sin(angle/slice);
        context.save();
        context.translate(x, y);
        context.rotate(Math.cos(-angle));
        context.scale(w*0.1,h*.05);
        context.beginPath();
        context.rect(-w * 0., random.range(0, -h * .25), w * .04, h * .5);
        // context.fill();
        context.restore();

        context.save();
        x = cx + radiusOff * Math.cos(-angle) + Math.cos(Math.random() + (angle));
        y = cy + radiusOff * Math.sin(angle) * Math.sin(angle/slice);
        context.translate(y, x);

        context.beginPath();
        
        context.rotate(Math.tan(slice+angle)); 
        context.scale(h*.025,h*.004);
        context.rect(-w * 0.5, random.range(0, -h * .25), w * .04, h * .5);
        // context.fill();
        context.restore();
      }
    }
    anim();
  };
};

canvasSketch(sketch, settings);