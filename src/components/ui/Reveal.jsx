import useReveal from '../../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
