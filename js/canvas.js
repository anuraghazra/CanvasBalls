const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const circles = [];

for (let i = 0; i < 15; i++) {
  const radius = 50;
  const diameter = radius * 2
  const x = Math.random() * (width - diameter) + radius;
  const y = Math.random() * (height - diameter) + radius;
  const dx = Math.random() - 0.5 * 3;
  const dy = Math.random() - 0.5 * 5;
  const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  circles.push(new Circle(x, y, dx, dy, radius, color))
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  circles.forEach(circle => circle.update(ctx))

  requestAnimationFrame(animate);
}
animate();