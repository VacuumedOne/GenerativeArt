import p5 from 'p5'

const sketch = (p) => {
  p.setup = function () {
    //canvasのセットアップ
    const width = 800
    const height = 200
    p.createCanvas(width, height)
    p.background(150)
    p.stroke(100)
    p.fill(200)
    
    //オブジェクトのセットアップ
    let step = 10
    let lastx = -800
    let lasty = -800
    let y = 50
    let border_x = 20
    let border_y = 10
    for (let x = border_x; x <= width - border_x; x += step) {
      y = border_y + p.random(height - 2*border_y)
      if (lastx > -800) {
        p.line(x, y, lastx, lasty)
      }
      lastx = x
      lasty = y
    }
  }
  p.draw = function () {

  }
}

new p5(sketch, document.body)
