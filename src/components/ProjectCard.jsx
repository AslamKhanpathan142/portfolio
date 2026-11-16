import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { LuArrowUpRight } from 'react-icons/lu'
import BrowserFrame from './BrowserFrame'
import Spot from './Spot'

export default function ProjectCard({ project: p, variant = 'card' }) {
  const href = p.live || p.github
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}
      className={variant === 'feature' ? 'pfeature' : 'pitem'}>
      <Spot className="pcard">
        <a className="pmedia" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} tabIndex={-1}>
          <BrowserFrame project={p}>
            <span className="open">{p.live ? 'Open live demo' : 'View source'} <LuArrowUpRight size={15} /></span>
          </BrowserFrame>
        </a>
        <div className="pbody">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <ul className="chips" aria-label="Technologies">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="plinks">
            {p.live && <a className="plink primary" href={p.live} target="_blank" rel="noreferrer">Live Demo <LuArrowUpRight size={15} /></a>}
            <a className="plink" href={p.github} target="_blank" rel="noreferrer"><FaGithub size={15} /> Code</a>
          </div>
        </div>
      </Spot>
    </motion.article>
  )
}
