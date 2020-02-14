/**
 * Draw a circle that bubbles up the screen on
 * every re-draw
 */

export default class Star {
  private x: number
  private y: number
  private radius: number
  private velocity: number
  private color: string

  constructor(
    x: number,
    y: number,
    radius: number,
    velocity: number,
    color?: string
  ) {
    this.x = x
    this.y = y
    this.radius = radius
    this.velocity = velocity
    this.color = color || '#FFFFFF'
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()

    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()

    ctx.closePath()

    //  Update y position
    this.y =
      this.y <= -this.radius
        ? window.innerHeight + this.radius
        : this.y - this.velocity
  }
}
