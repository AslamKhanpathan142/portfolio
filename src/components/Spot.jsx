// Card wrapper with a cursor-following spotlight (pure CSS variables, no re-renders).
export default function Spot({ as: Tag = 'div', className = '', children, ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return <Tag className={`spot ${className}`} onPointerMove={move} {...rest}>{children}</Tag>
}
