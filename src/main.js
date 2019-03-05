import p5 from 'p5'

const sketch = (p) => {
  p.setup = function () {
    //canvasのセットアップ
    const width = 800
    const height = 800
    p.createCanvas(width, height)
    p.background(150)
    p.stroke(100)
    p.fill(200)
    
    //オブジェクトのセットアップ
    let step = 1
    let last_x = -800
    let last_y = -800
    let y = height/2
    let angle = 0
    let border_x = 20
    let border_y = 10
    for (let x = border_x; x <= width - border_x; x += step) {
      let rad = p.radians(angle)
      y = height/2 + (p.pow(p.sin(rad), 3)) * (height - 2*border_y)/2
      if (last_x > -800) {
        p.line(x, y, last_x, last_y)
      }
      last_x = x
      last_y = y
      angle++
    }
  }
  p.draw = function () {

  }
}

new p5(sketch, document.body)
