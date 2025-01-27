function Particle() {
  this.pos = createVector(random(width), random(height))
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)
  this.maxspeed = 2

  this.prevPos = this.pos.copy()

  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.vel.limit(this.maxspeed)
    this.acc.mult(0)
  }

  this.follow = function (vectors) {
    let x = floor(this.pos.x / scl)
    let y = floor(this.pos.y / scl)
    let index = x + y * cols
    let force = vectors[index]
    this.applyForce(force)
  }

  this.applyForce = function (force) {
    this.acc.add(force)
  }

  this.show = function () {
    stroke(0, 5)
    strokeWeight(1)
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.updatePrev()
  }

  this.updatePrev = function () {
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y
  }

  this.edges = function () {
    if (this.pos.x > width) {
      this.pos.x = 0
      this.updatePrev()
    }
    if (this.pos.x < 0) {
      this.pos.x = width
      this.updatePrev()
    }
    if (this.pos.y > height) {
      this.pos.y = 0
      this.updatePrev()
    }
    if (this.pos.y < 0) {
      this.pos.y = height
      this.updatePrev()
    }
  }
}
