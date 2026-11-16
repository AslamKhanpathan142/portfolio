const hostOf = (u) => { try { const x = new URL(u); return x.host + (x.pathname === '/' ? '' : x.pathname) } catch { return u } }

export default function BrowserFrame({ project: p, className = '', children }) {
  const url = hostOf(p.live || p.github)
  return (
    <div className={`frame ${className}`}>
      <div className="frame-bar"><i /><i /><i /><span>{url}</span></div>
      <div className={`frame-view ${p.fit === 'contain' ? 'is-contain' : ''}`}>
        <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
        {children}
      </div>
    </div>
  )
}
