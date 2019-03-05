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
    let center_x = width/2
    let center_y = height/2
    let step = 1
    let r = 300
    for (let a = 0; a < 360; a += step) {
      let x = center_x + r * p.cos(p.radians(a))
      let y = center_y + r * p.sin(p.radians(a))
      p.circle(x, y, 2)
    }
  }
  p.draw = function () {

  }
}

new p5(sketch, document.body)
