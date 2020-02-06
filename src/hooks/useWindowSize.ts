import { useState, useEffect } from 'preact/hooks'

export default function useWindowSize() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  const onResize = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return { width, height }
}
