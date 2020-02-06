import { h } from 'preact'
import { useState } from 'preact/hooks'
import IntersectionObserverContainer from './IntersectionObserverContainer'

interface Props {
  children?: any
  className?: string
}

export default function AppearInAnimationContainer({
  children,
  className,
}: Props) {
  const [hasBeenSeen, setHasBeenSeen] = useState(false)

  return (
    <IntersectionObserverContainer
      onIntersect={entries => {
        if (entries[0].isIntersecting) {
          setHasBeenSeen(true)
        }
      }}
      threshold={0.2}
    >
      <div
        className={`${hasBeenSeen ? 'appear-in' : 'opacity-0'} ${className}`}
      >
        {children}
      </div>
    </IntersectionObserverContainer>
  )
}

AppearInAnimationContainer.defaultProps = {
  className: '',
}
