const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const { width: canvasWidth, height: canvasHeight } = config.canvas
const { radius: ballsRadius, count: ballsCount } = config.balls

// setting width and height of the canvas
canvas.width = canvasWidth
canvas.height = canvasHeight

const circles = []

for (let i = 0; i < ballsCount; i++) {
  const diameter = ballsRadius * 2
  const x = Math.random() * (canvasWidth - diameter) + ballsRadius
  const y = Math.random() * (canvasHeight - diameter) + ballsRadius
  const dx = Math.random() - 0.5 * 3
  const dy = Math.random() - 0.5 * 5
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`

  circles.push(new Circle(x, y, dx, dy, ballsRadius, color))
}

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  circles.forEach(circle => circle.update(ctx))

  requestAnimationFrame(animate)
}
animate()
