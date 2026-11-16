import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects, projectFilters } from '../data/projects'

export default function Projects() {
  usePageTitle('Projects', 'Full stack, React and mobile projects by Mo Aslam Khan, with source code and live demos.')
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))
  const count = (f) => (f === 'All' ? projects.length : projects.filter((p) => p.tags.includes(f)).length)

  return (
    <>
      <PageHeader title="Projects">{projects.length} projects across the MERN stack, React, Node.js and React Native. Open any preview for the live demo, or read the code on GitHub.</PageHeader>
      <div className="wrap">
        <div className="seg" role="group" aria-label="Filter projects">
          {['All', ...projectFilters].map((f) => (
            <button key={f} className={`seg-btn ${filter === f ? 'on' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {filter === f && <motion.span layoutId="seg-pill" className="seg-pill" transition={{ type: 'spring', stiffness: 440, damping: 36 }} />}
              <span className="seg-text">{f} <small>{count(f)}</small></span>
            </button>
          ))}
        </div>
        <LayoutGroup>
          <div className="pgrid">
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => <ProjectCard key={p.id} project={p} variant={filter === 'All' && i === 0 ? 'feature' : 'card'} />)}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </>
  )
}
