import { h } from 'preact'

interface Props {
  children?: any
  className?: string
}

export default function Title({ className, children }: Props) {
  return (
    <h2
      className={`text-3xl mb-5 border-b border-solid border-gray-400 ${className}`}
    >
      {children}
    </h2>
  )
}

Title.defaultProps = {
  className: '',
}
