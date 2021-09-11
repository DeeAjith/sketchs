const canvasSketch = require('canvas-sketch');
const canvasSize = 1080;

const settings = {
  dimensions: [canvasSize, canvasSize]
};

const sketch = () => {
  return ({
    context,
    width,
    height
  }) => {
    context.fillStyle = '#202731';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    const w = width * 0.13;
    const h = height * 0.13;
    // const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    let x, y;
    let color = [
      '#A6341B',
      '#F9C743',
      '#60371E',
      '#D1BF91'
    ]

let framesPerSecond = 5;
    function animate() {
      setTimeout(function () {
        requestAnimationFrame(animate);
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {

            x = ix + (w) * i; //gap*w
            y = iy + (h) * j; //gap*h

            // context.strokeStyle = color[Math.round(Math.random()+i)];
            context.beginPath();
            context.fillStyle = color[Math.round(Math.random() * i)];
            // context.fillStyle = color[Math.round(Math.random()*i)];
            context.rect(x, y, w, h);
            // context.stroke();
            context.fill();
            let rand = Math.random() > 0.5
            if (rand) {
              context.beginPath();
              context.fillStyle = color[Math.round(Math.random() * j)];
              // context.fillStyle = color[Math.round(Math.random()*j)];
              // context.strokeStyle = color[Math.round(Math.random()*j)];
              // context.arc(x + (w / 2), y + (h / 2), (w + h) / 6, Math.round(Math.random() * 10), Math.PI * 2);
              context.rect(x, y, w, h);
              // context.rect(x + (off / 2), y + (off / 2), w - off, h - off);
              context.fill();
              // context.stroke();
            }
          }
        }
      }, 1000 / framesPerSecond);
    }
    animate();

    function listArtists() {
      let artists = ['RafikAnadol', 'mattdesl', 'faction.3d', 'pierre.paslier'];
      artists.forEach(item => {
        console.log(item);
      });
    }
    // listArtists();
    // end 
  };
};

canvasSketch(sketch, settings);