import { motion } from 'framer-motion'

export default function PageHeader({ title, children }) {
  return (
    <header className="page-head wrap">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}>{title}</motion.h1>
      {children && <p className="lead">{children}</p>}
    </header>
  )
}
