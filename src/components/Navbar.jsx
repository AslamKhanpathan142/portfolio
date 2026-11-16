import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LuMenu, LuX, LuDownload } from 'react-icons/lu'
import { nav, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <div className="nav-wrap">
      <div className="nav">
        <Link to="/" className="logo" aria-label="Mo Aslam Khan, home">
          <span className="logo-mark">MA</span>
          <span className="logo-name">{profile.name}</span>
        </Link>
        <nav className={`links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className="link">
              {({ isActive }) => (
                <>
                  {isActive && <motion.span layoutId="nav-pill" className="pill" transition={{ type: 'spring', stiffness: 440, damping: 36 }} />}
                  <span className="link-text">{n.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <a className="btn btn-sm nav-resume" href={profile.resume} download="Mo_Aslam_Khan_Resume.pdf"><LuDownload size={15} /> Resume</a>
        <button className="menu-btn" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </div>
    </div>
  )
}
