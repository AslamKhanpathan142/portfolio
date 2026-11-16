import { LuMonitor, LuServer, LuDatabase, LuSparkles, LuWrench, LuBookOpen } from 'react-icons/lu'
import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Spot from '../components/Spot'
import { skills } from '../data/profile'
import { skillIcon } from '../data/icons'

const icons = { LuMonitor, LuServer, LuDatabase, LuSparkles, LuWrench, LuBookOpen }

export default function Skills() {
  usePageTitle('Skills', 'Technical skills of Mo Aslam Khan across frontend, backend, databases, AI and automation.')
  return (
    <>
      <PageHeader title="Technical skills">Grouped by where they sit in an application, from the interface down to the data and the AI layer.</PageHeader>
      <div className="wrap srows">
        {skills.map((g) => {
          const Icon = icons[g.icon]
          return (
            <Reveal key={g.title}>
              <section className="srow" aria-labelledby={`s-${g.title}`}>
                <div className="srow-h">
                  <span className="ico"><Icon size={20} /></span>
                  <h2 id={`s-${g.title}`}>{g.title}</h2>
                  <p className="muted">{g.items.length} skills</p>
                </div>
                <ul className="skills">
                  {g.items.map((i) => {
                    const [SI, c] = skillIcon[i] || []
                    return <li key={i}><Spot className="skill" style={{ '--c': c }}>{SI && <SI size={20} />}<span>{i}</span></Spot></li>
                  })}
                </ul>
              </section>
            </Reveal>
          )
        })}
      </div>
    </>
  )
}
