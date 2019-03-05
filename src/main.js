import p5 from 'p5'

const sketch = (p) => {
  p.setup = function () {
    //canvasのセットアップ
    const width = 1000
    const height = 1000
    p.createCanvas(width, height)
    p.background(150)
    p.stroke(50)
    p.fill(255)
    
    //オブジェクトのセットアップ
    let xStart = Math.floor(Math.random()*10)
    let yNoise = Math.floor(Math.random()*10)
    p.translate(width/2, height/2)
    for (let y = -height/8; y <= height/8; y += 3) {
      yNoise += 0.02
      let xNoise = xStart
      for (let x = -width/8; x <= width/8; x += 3) {
        xNoise += 0.02
        drawPoint(p, x, y, p.noise(xNoise, yNoise))
      }
    }
  }
  p.draw = function () {
    p.ellipse(150, 150, 100, 100)
  }
}

new p5(sketch, document.body)

function drawPoint(p, x, y, noiseFactor) {
  p.push()
  p.translate(x * noiseFactor * 4, y * noiseFactor * 4)
  let edgeSize = noiseFactor * 26
  p.rect(0, 0, edgeSize, edgeSize)
  p.pop()
}