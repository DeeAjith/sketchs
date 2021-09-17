const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const res = 2048 * 1;

const settings = {
  dimensions: [res, res],
  animate: true
};
const sketch = ({
  context,
  width,
  height
}) => {

  const creators = [];

  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    creators.push(new Creator(x, y));
  }

  return ({
    context,
    width,
    height
  }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
 
    for(let i = 0; i < creators.length; i++) {
      const creator = creators[i];

      for(j = i + 1; j < creators.length; j++) {
        const other = creators[j];

        const dist = creator.cord.getDistance(other.cord);
        if( dist > width * .2) continue 

        context.lineWidth = math.mapRange(dist, 0, 350, 12, .2);
        
        context.beginPath();
        context.moveTo(creator.cord.x, creator.cord.y);
        context.lineTo(other.cord.x, other.cord.y);

        context.stroke();
      }
    }


    creators.forEach(create => {
      create.draw(context);
      create.bounce(width, height);
      create.update();
    });

  };
};

canvasSketch(sketch, settings);

class Cord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;

    return Math.sqrt( dx * dx + dy * dy )
  }
}

class Creator {
  constructor(x, y) {
    const speed = 2.5;
    this.cord = new Cord(x, y);
    this.vel = new Cord(random.range(-speed, speed), random.range(-speed, speed));
    this.r = random.range(4, 45);
  }

  draw(context) {
    context.save();
    context.lineWidth = 8;
    context.translate(this.cord.x, this.cord.y)

    context.beginPath();
    context.arc(0, 0, this.r, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    
    context.restore();
  }

  bounce(width, height) {
    if ( this.cord.x >= width || this.cord.x <= 0 )  this.vel.x *= -1;
    if ( this.cord.y >= height || this.cord.y <= 0) this.vel.y *= -1;
  }

  update() {
    this.cord.x += this.vel.x;
    this.cord.y += this.vel.y;
  }
}