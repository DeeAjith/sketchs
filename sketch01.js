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
    context.fillStyle = '#101010';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    const w = width * 0.12;
    const h = height * 0.12;
    const gap = width * 0.01;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;
    
    
    let x, y;
    let color = [
      // '#A6341B',
      // '#F9C743',
      // '#60371E',
      // '#D1BF91'
      '#000',
      '#fff'
    ]
    
    let framesPerSecond = 5;
    function animate() {
      setTimeout(function () {
        requestAnimationFrame(animate);
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            
            x = ix + (w + gap) * i; //gap*w
            y = iy + (h + gap) * j; //gap*h

            let rand = Math.random() > 0.5
            if (rand) {
              context.beginPath();
              context.strokeStyle = color[1];
              context.lineWidth = 4;
              // context.fillStyle = color[Math.round(Math.random()*j)];
              context.rect(x, y, w, h);
              context.stroke();
              // context.fill();
              context.beginPath();
              context.lineWidth = 2;
              context.strokeStyle = color[0];
              context.arc(x + (w / 2), y + (h / 2), (w + h) / 5,0,0);
              // context.rect(x + (off / 2), y + (off / 2), w - off, h - off);
            }
            // context.strokeStyle = color[Math.round(Math.random()+i)];
            context.beginPath();
            context.fillStyle = color[0];
            // context.fillStyle = color[Math.round(Math.random()*i)];
            
            context.rect(x, y, w, h);
            context.fill();

            context.beginPath();
            context.fillStyle = color[1];
            context.arc(x + (w / 2), y + (h / 2),  Math.random()*(w + h) / 10,0, Math.PI * 2);
            context.fill();
            
            context.beginPath();
            context.fillStyle = color[0];
            context.arc(x + (w / 2), y + (h / 2), Math.random()*(w + h) / 20,0, Math.PI * 2);
            context.fill();
            // context.stroke();
            
            
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