import { h } from 'preact'

interface Props {
  children?: any
  className?: string
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`border-white border-solid border px-4 py-2 mt-5 rounded-sm hover:bg-white hover:text-black font-sans uppercase cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}
