import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { LuMail, LuArrowUpRight } from 'react-icons/lu'
import { nav, profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-brand">{profile.name}</p>
          <p className="muted">{profile.role} based in {profile.location}. Building web applications, APIs and AI-powered software.</p>
        </div>
        <nav aria-label="Footer pages"><p className="foot-h">Pages</p>{nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}</nav>
        <div className="foot-col"><p className="foot-h">Elsewhere</p>
          <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={15} /> GitHub <LuArrowUpRight size={13} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={15} /> LinkedIn <LuArrowUpRight size={13} /></a>
          <a href={`mailto:${profile.email}`}><LuMail size={15} /> Email</a>
        </div>
      </div>
      <p className="wordmark" aria-hidden="true">Mo Aslam Khan</p>
      <p className="wrap copy">© {new Date().getFullYear()} {profile.name}. Designed and built by me with React.</p>
    </footer>
  )
}
