const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d');
const point = { isMoving: false, x: 0, y: 0, }

canvas.addEventListener('mousedown', (e) => {
  e.preventDefault();
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = 12;
  ctx.strokeStyle = '#333';

  point.x = e.layerX;
  point.y = e.layerY;
  
  console.log(`start: ${point.x}, ${point.y}`);

  ctx.moveTo(point.x, point.y);
}, false);

canvas.addEventListener('mousemove', (e) => {
  if (e.buttons !== 1 && e.witch !== 1 && e.type !== 'touchmove') { return; }

  point.x = e.layerX;
  point.y = e.layerY;
  point.isMoving = true;

  console.log(`move: ${point.x}, ${point.y}`);
  
  ctx.lineTo(point.x, point.y);
  ctx.stroke();  
}, false);

canvas.addEventListener('mouseup', (e) => {
  console.log(`end: ${point.x}, ${point.y}`);

  if (!point.isMoving) {
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  }

  point.isMoving = false;
}, false);

window.addEventListener('resize', (e) => {
  console.log('resize');

  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;
}, false);

canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.width = document.documentElement.scrollWidth;
canvas.height = document.documentElement.scrollHeight;
document.body.appendChild(canvas);
