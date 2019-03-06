import p5 from 'p5'

const width = 600
const height = 600

let angle
let r
let strokeColor = 254
let strokeChange = -1

let xNoise //中心xのノイズ
let yNoise //中心yのノイズ
let rNoise //半径のノイズ
let angleNoise //角度のノイズ

const sketch = (p) => {
  p.setup = function () {
    //canvasのセットアップ
    p.createCanvas(width, height)
    p.background(150)
    p.stroke(100)
    p.fill(200)
    p.smooth()

    //オブジェクトのセットアップ
    angle = -p.PI
    xNoise = p.random(10)
    yNoise = p.random(10)
    rNoise = p.random(10)
    angleNoise = p.random(10)
  }
  p.draw = function () {
    rNoise += 0.005
    r = (p.noise(rNoise) * 550) + 1

    angleNoise += 0.005
    angle += (p.noise(angleNoise) * 6) - 3
    if (angle > 360) {
      angle -= 360
    } else if (angle < 0) {
      angle += 360
    }

    xNoise += 0.01
    yNoise += 0.01

    let center_x = width/2 + (p.noise(xNoise) * 100) - 50
    let center_y = height/2 + (p.noise(yNoise) * 100) - 50

    let rad = p.radians(angle)
    let x1 = center_x + (r * p.cos(rad))
    let y1 = center_y + (r * p.sin(rad))

    let opprad = rad + p.PI
    let x2 = center_x + (r * p.cos(opprad))
    let y2 = center_y + (r * p.sin(opprad))

    strokeColor += strokeChange
    if (strokeColor > 254) {
      strokeChange = -1
    } else if (strokeColor < 0) {
      strokeChange = 1
    }
    p.stroke(strokeColor, 60)
    p.strokeWeight(1)
    p.line(x1, y1, x2, y2)
  }
}

new p5(sketch, document.body)
