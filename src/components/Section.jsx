export default function SectionHead({ title, dim, children }) {
  return (
    <div className="sec-head">
      <h2>{title} {dim && <span className="dim">{dim}</span>}</h2>
      {children}
    </div>
  )
}
