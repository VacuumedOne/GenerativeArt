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
    let strokeColor = 0
    p.strokeWeight(4)
    for (let a = 0; a < 180; a += step) {
      let x1 = center_x + r * p.cos(p.radians(a))
      let y1 = center_y + r * p.sin(p.radians(a))
      let x2 = center_x + r * p.cos(p.radians(a) + p.PI)
      let y2 = center_y + r * p.sin(p.radians(a) + p.PI)
      p.stroke(strokeColor, 60)
      strokeColor = (strokeColor + 2)%254
      p.line(x1, y1, x2, y2)
    }
  }
  p.draw = function () {

  }
}

new p5(sketch, document.body)
