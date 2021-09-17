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
    c.fillStyle = '#252525';
    c.fillRect(0, 0, width, height);
    
    
    const w = width * 0.0055;
    const h = height * 0.05;
    const cx = width * 0.5;
    const cy = height * 0.5;
    const colors = [
      '#2F9599',
      '#EC2049',
      '#F26B38',
      '#F7DB4F'
    ]

    let x, y;
    const count = 1000;
    const radiusOff = width *.25;

    function anim() {
      // requestAnimationFrame(anim)
      for (let i = 0; i < count; i++) {
        const slice = math.degToRad(360 / count);
        const angle = slice * i;
        let rand = Math.round(Math.random() * angle);
        let cirRad;

        context.save();

        x = cx/1.2 + radiusOff * Math.cos(angle);
        y = cy + radiusOff * Math.cos(angle) * Math.tan(angle);
        context.translate(y, x);
        
        context.beginPath();
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.rotate(Math.sin(-angle)); 
        // context.scale(w*.025,h*.01);
        cirRad = random.range(0 , Math.random()*(w*5.5));
        context.scale(Math.random()*(w)*.0251, Math.random()*(h)*0.02521);
        context.rect(Math.round(Math.random()/x),Math.round(Math.random()/y),w*2,h*2);
        
        // context.arc(Math.round(Math.random()/x) , Math.round(Math.random()/y) ,cirRad, 0,Math.PI*2);       
        context.fill();
        context.restore();

        context.save();
        x = cx + radiusOff * Math.sin(angle) / Math.tan(-angle);
        y = cy + radiusOff * Math.sin(angle) ;
        context.translate(y, x);
        
        context.beginPath();
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.rotate(Math.sin(angle));

        context.scale(w*.02, Math.random()*(h)*0.01);
        context.rect(Math.round(Math.random()/x),Math.round(Math.random()/y),w*2,h*2);
        // cirRad = Math.random() * w*4;
        // context.arc(Math.round(Math.random()/x) , Math.round(Math.random()/y) ,cirRad, 0,Math.PI*2);       
        // context.fill();
        // context.restore();
        // context.save();
        // x = cx + radiusOff * Math.tan(angle) * Math.cos(-angle);
        // y = cy + radiusOff * Math.tan(angle) * Math.tan(angle);
        context.translate(y, x);
        
        context.beginPath();
        
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        // context.rotate(Math.sin(angle));

        context.scale(Math.random()*(w)*.21, Math.random()*(h)*521);
        context.rect(Math.round(Math.random()/x),Math.round(Math.random()/y),w*2,h*2);
        // cirRad = Math.random() * w*4;
        // context.arc(Math.round(Math.random()/x) , Math.round(Math.random()/y) ,cirRad, 0,Math.PI*2);       
        // context.fill();
        context.restore();
      }
    }
    anim();
  };
};

canvasSketch(sketch, settings);