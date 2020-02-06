import { h } from 'preact'

interface Props {
  children?: any
  className?: string
}

export default function ContainerRoll({ children, className }: Props) {
  return (
    <div className={`container mx-auto bg-gray-200 rounded-sm ${className}`}>
      {children}
    </div>
  )
}

ContainerRoll.defaultProps = {
  className: '',
}
