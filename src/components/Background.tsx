import { h, ComponentChildren, Fragment } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import useWindowSize from '../hooks/useWindowSize'
import Comet from '../canvas/Comet'
import Star from '../canvas/Star'

const MAX_STAR_VELOCITY = 0.3
const MIN_STAR_VELOCITY = 0.1
const MAX_RADIUS = 2
const MIN_RADIUS = 0.5

/**
 * Creates a star with random size and position
 */
function createRandomStar(canvasWidth: number, canvasHeight: number): Star {
  return new Star(
    //  Define the position in the X axis
    Math.random() * canvasWidth,

    //  Set the initial Y position
    Math.random() * canvasHeight,

    //  Set the radius of the star
    Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,

    //  Set the velocity – how fast it will bubble up
    Math.random() * (MAX_STAR_VELOCITY - MIN_STAR_VELOCITY) + MIN_STAR_VELOCITY,

    //  Color of the star
    Math.floor(Math.random() * 10) % 2 ? '#15495d' : '#25697d'
  )
}

interface Props {
  children?: ComponentChildren
}

export default function Background({ children }: Props) {
  const canvasRef = useRef(null)
  const { width, height } = useWindowSize()

  useEffect(() => {
    let comet = new Comet(0, height / 2, 0, 0)

    //  I want a star every 3px
    const numberOfStarts = Math.floor(width / 3)

    //  Creates random stars
    const stars: Array<Star> = new Array(numberOfStarts)
      .fill(null)
      .map(() => createRandomStar(width, height))

    //  Fire a comet every 5 seconds
    const cometInterval = setInterval(() => {
      if (!comet.isVisibleOnScreen(width, height)) {
        comet.setVelocities(
          (Math.random() - 0.5) * (90 - 70) + 70,
          (Math.random() - 0.5) * (9 - 7) + 7
        )
        comet.reset()
      }
    }, 5000)

    //  Clear the canvas and re-draw every item
    const drawBackground = () => {
      const canvas = canvasRef.current
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(star => {
        star.draw(ctx)
      })
      comet.draw(ctx)

      return window.requestAnimationFrame(drawBackground)
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

      //  Setting canvas for retina displays
      canvas.width = width * 2
      canvas.height = height * 2
      canvas.style.width = width
      canvas.style.height = height
      ctx.scale(2, 2)

      const raf = drawBackground()

      return () => {
        window.cancelAnimationFrame(raf)
        clearInterval(cometInterval)
      }
    }
  }, [width, height])

  return (
    <Fragment>
      <canvas ref={canvasRef} className="canvas-background"></canvas>
      {children}
    </Fragment>
  )
}
