var canvas = document.querySelector('canvas');
const height = window.innerHeight;
const width = window.innerWidth;
var c = canvas.getContext('2d');
canvas.height = height;
canvas.width = width;


class Circle{
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = () => {
            c.beginPath();
            c.fillStyle = color;
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fill();
            c.closePath();
        }
        this.update = () => {
            this.draw();
            if ((this.x + this.radius > width) || (this.x - this.radius < 0)) {
                this.dx = -this.dx;
            }
            if ((this.y + this.radius > height) || (this.y - this.radius < 0)) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}



let circles = [];
for (let i = 0; i < 15; i++){
    let radius = 50;
    let diameter = radius * 2
    let x = Math.random() * (width - diameter) + radius;
    let y = Math.random() * (height - diameter) + radius;
    let dx = Math.random() - 0.5 * 3;
    let dy = Math.random() - 0.5 * 5;
    let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    circles.push(new Circle(x, y, dx, dy, radius, color))
}
function animate() {
    c.clearRect(0, 0, width, height);
    circles.forEach(circle => {
        circle.update();
    })
    requestAnimationFrame(animate);
}
animate();

// canvas.addEventListener('mousemove', (e) => {
//     if (e.which == 1) {
//         c.beginPath();
//         c.fillStyle = 'red';
//         c.arc(e.x, e.y, 10, 0, Math.PI * 2, false);
//         c.fill();
//         c.closePath();
//     }
// })

