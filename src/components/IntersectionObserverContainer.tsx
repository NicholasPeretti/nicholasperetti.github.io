import { h } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

interface Props {
  children?: any
  threshold?: number | Array<number>
  onIntersect?: (entries: Array<any>) => void
}

export default function IntersectionObserverContainer({
  children,
  threshold,
  onIntersect,
}: Props) {
  const observer = useRef(
    new IntersectionObserver(onIntersect, {
      threshold,
    })
  )
  const node = useRef(null)

  useEffect(() => {
    observer.current.observe(node.current)
  }, [])

  return <div ref={node}>{children}</div>
}
