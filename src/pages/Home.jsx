import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LuArrowRight, LuMail, LuDownload, LuMapPin, LuLock, LuScanText, LuFileText, LuListOrdered, LuDatabase, LuSparkles } from 'react-icons/lu'
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiRedis } from 'react-icons/si'
import usePageTitle from '../hooks/usePageTitle'
import BrowserFrame from '../components/BrowserFrame'
import ProjectCard from '../components/ProjectCard'
import SectionHead from '../components/Section'
import Reveal from '../components/Reveal'
import Spot from '../components/Spot'
import { profile, experience } from '../data/profile'
import { projects } from '../data/projects'
import { skillIcon, homeTech } from '../data/icons'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const rise = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } } }
const stage = projects.slice(0, 4)
const job = experience[0]

export default function Home() {
  usePageTitle('', 'Mo Aslam Khan is a Full Stack Developer building web applications with React.js, Node.js and Python, including AI-powered document processing with OCR and the Gemini API.')
  const [active, setActive] = useState(0)
  const p = stage[active]

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <motion.div variants={stagger} initial="hidden" animate="show" className="hero-grid">
            <div>
              <motion.p variants={rise} className="hero-chip"><span className="dot" /> {profile.name}<i /> {profile.role}</motion.p>
              <motion.h1 variants={rise}>Full stack engineer building web apps, APIs and AI-powered software.</motion.h1>
              <motion.p variants={rise} className="lead">
                I build with React.js, Node.js and Python, from responsive interfaces and RESTful APIs with authentication and RBAC to AI document pipelines that run on OCR, Redis and the Gemini API.
              </motion.p>
              <motion.div variants={rise} className="cta">
                <Link className="btn btn-primary" to="/projects">View Projects <LuArrowRight size={16} /></Link>
                <Link className="btn" to="/contact"><LuMail size={16} /> Contact Me</Link>
                <a className="btn btn-ghost" href={profile.resume} download="Mo_Aslam_Khan_Resume.pdf"><LuDownload size={16} /> Resume</a>
              </motion.div>
            </div>
            <motion.aside variants={rise} className="now" aria-label="Current role">
              <p className="now-h"><span className="dot" /> Currently</p>
              <p className="now-role">{job.role}</p>
              <p className="muted">{job.company}</p>
              <p className="now-meta"><LuMapPin size={14} /> {job.place} <span>since {job.period.split(' – ')[0]}</span></p>
              <p className="now-copy">Building an AI-powered tender processing pipeline with Python, Redis, OCR and the Gemini API.</p>
            </motion.aside>
          </motion.div>

          <motion.div className="stage" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}>
            <div className="win-glow" />
            <motion.div key={p.id} className="win-wrap" initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              <BrowserFrame project={p} className="win" />
            </motion.div>
            <div className="tabs" role="tablist" aria-label="Featured projects">
              {stage.map((s, i) => (
                <button key={s.id} role="tab" aria-selected={i === active} className={`tab ${i === active ? 'on' : ''}`} onClick={() => setActive(i)}>
                  <span>{s.title}</span>
                  <small>{s.tags.slice(0, 3).join(', ')}</small>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="wrap tech-sec" aria-label="Technologies">
        <p className="tech-h">The stack I work in every day</p>
        <ul className="tech">
          {homeTech.map((t) => { const [Icon, c] = skillIcon[t]; return <li key={t} style={{ '--c': c }}><Icon size={22} /><span>{t}</span></li> })}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="build-h">
        <Reveal>
          <SectionHead title="What I build." dim="Interfaces, the services behind them, and the AI that does the heavy lifting." />
        </Reveal>
        <div className="bento">
          <Reveal className="b-a"><Spot className="cell">
            <h3 id="build-h">AI-powered tender processing</h3>
            <p>A pipeline for document extraction, cleaning and summarization, built for tender analysis at Aarav Tender Consultant.</p>
            <ul className="parts">
              {[[LuFileText, 'PDF processing'], [LuScanText, 'Multilingual OCR'], [LuListOrdered, 'Queue-based workers'], [LuSparkles, 'Gemini API'], [LuDatabase, 'Structured data storage']].map(([I, t]) => <li key={t}><I size={17} />{t}</li>)}
            </ul>
            <div className="stackrow"><SiPython size={18} /><SiRedis size={18} /><span>Python and Redis</span></div>
          </Spot></Reveal>
          <Reveal className="b-b" delay={0.08}><Spot className="cell">
            <h3>Full stack web apps</h3>
            <p>Responsive React.js interfaces on Node.js and Express.js APIs, with MongoDB or Supabase underneath.</p>
            <div className="layers">
              <div><SiReact size={18} /> React.js <small>interface</small></div>
              <div><SiNodedotjs size={18} /> Node.js, Express.js <small>API</small></div>
              <div><SiMongodb size={18} /> MongoDB, Supabase <small>data</small></div>
            </div>
          </Spot></Reveal>
          <Reveal className="b-c" delay={0.04}><Spot className="cell">
            <h3>Auth and access control</h3>
            <p>Authentication and role-based access control, with JWT and Bcrypt used across my MERN stack projects.</p>
            <ul className="chips big"><li><LuLock size={14} /> JWT</li><li>Bcrypt</li><li>RBAC</li></ul>
          </Spot></Reveal>
          <Reveal className="b-d" delay={0.1}><Spot as={Link} to="/projects" className="cell cell-link">
            <h3>{projects.length} projects on GitHub</h3>
            <p>MERN stack apps, React apps, a Chrome extension and a React Native app, with live demos where deployed.</p>
            <div className="fan" aria-hidden="true">{projects.slice(1, 5).map((x) => <img key={x.id} src={x.image} alt="" loading="lazy" />)}</div>
            <span className="textlink">Browse all projects <LuArrowRight size={16} /></span>
          </Spot></Reveal>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="work-h">
        <Reveal>
          <SectionHead title="Selected projects." dim="A closer look at recent work.">
            <Link to="/projects" className="textlink">All {projects.length} projects <LuArrowRight size={16} /></Link>
          </SectionHead>
          <span id="work-h" className="sr">Selected projects</span>
        </Reveal>
        <div className="home-projects">
          <Reveal><ProjectCard project={projects[0]} variant="feature" /></Reveal>
          <Reveal><ProjectCard project={projects[1]} /></Reveal>
          <Reveal delay={0.08}><ProjectCard project={projects[2]} /></Reveal>
        </div>
      </section>

      <section className="wrap section xp" aria-labelledby="xp-h">
        <Reveal>
          <SectionHead title="Experience." dim="Where I work now, and where I started." />
        </Reveal>
        <Reveal><Spot className="xp-card">
          <div className="xp-top"><div><h3 id="xp-h">{job.role}</h3><p className="company">{job.company}, {job.place}</p></div><span className="mono">{job.period}</span></div>
          <ul className="points">{job.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="xp-prev">Before this: <b>{experience[1].role}</b> at {experience[1].company}, {experience[1].period}.</p>
          <Link to="/about" className="textlink">Full background <LuArrowRight size={16} /></Link>
        </Spot></Reveal>
      </section>

      <section className="wrap">
        <Reveal><div className="closer">
          <h2>Have a role or a project in mind?</h2>
          <p className="lead">I would be glad to hear about it.</p>
          <div className="cta center">
            <Link className="btn btn-primary" to="/contact">Contact Me <LuArrowRight size={16} /></Link>
            <a className="btn" href={`mailto:${profile.email}`}><LuMail size={16} /> {profile.email}</a>
          </div>
        </div></Reveal>
      </section>
    </>
  )
}
