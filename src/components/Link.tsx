import { h } from 'preact'

interface Props {
  children?: any
  className?: string
  href?: string
}

export default function Link({ children, className, href }: Props) {
  return (
    <a
      className={`text-blue-500 hover:text-blue-800 cursor-pointer ${className}`}
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

Link.defaultProps = {
  className: '',
  href: '#',
}
