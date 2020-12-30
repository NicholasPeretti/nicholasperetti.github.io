export default class Comet {
  private originX: number
  private originY: number
  private velocityX: number
  private velocityY: number
  private color: string

  private x: number
  private y: number

  constructor(
    originX: number,
    originY: number,
    velocityX: number,
    velocityY: number,
    color?: string
  ) {
    this.originX = originX
    this.originY = originY
    this.y = originY
    this.x = originX
    this.velocityX = velocityX
    this.velocityY = velocityY
    this.color = color || '#FFFFFF'
  }

  draw(ctx: CanvasRenderingContext2D) {
    const tailLengthFactor = 1

    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.lineWidth = 2
    ctx.moveTo(
      this.x - tailLengthFactor * this.velocityX,
      this.y - tailLengthFactor * this.velocityY
    )
    ctx.lineTo(this.x, this.y)
    ctx.stroke()

    //  Update coordinates
    this.x += this.velocityX
    this.y += this.velocityY
  }

  reset() {
    this.x = this.originX * Math.random()
    this.y = this.originY * Math.random()
    this.setVelocities(
      //  Velocity of the X axis
      (Math.random() - 0.5) * (90 - 70) + 70,

      //  Velocity of the Y axis
      (Math.random() - 0.5) * (9 - 7) + 7
    )
  }

  isVisibleOnScreen(windowWith: number, windowHeight: number) {
    return (
      this.x > 0 && this.x < windowHeight && this.y > 0 && this.y < windowWith
    )
  }

  setVelocities(velocityX: number, velocityY: number) {
    this.velocityX = velocityX
    this.velocityY = velocityY
  }
}