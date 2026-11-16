import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { LuMapPin, LuDownload, LuMail } from 'react-icons/lu'
import usePageTitle from '../hooks/usePageTitle'
import Reveal from '../components/Reveal'
import { profile, summary, experience, education, certifications } from '../data/profile'

export default function About() {
  usePageTitle('About', 'Professional summary, experience, education and certifications of Mo Aslam Khan, Full Stack Developer.')
  return (
    <div className="wrap about">
      <aside className="about-side">
        <div className="avatar" aria-hidden="true">MA</div>
        <h1>{profile.name}</h1>
        <p className="muted">{profile.role}</p>
        <p className="now-meta"><LuMapPin size={14} /> {profile.location}</p>
        <div className="side-cta">
          <a className="btn btn-primary" href={profile.resume} download="Mo_Aslam_Khan_Resume.pdf"><LuDownload size={16} /> Resume</a>
          <Link className="btn" to="/contact"><LuMail size={16} /> Contact</Link>
        </div>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
        </div>
      </aside>

      <div className="about-main">
        <p className="summary">{summary}</p>

        <section aria-labelledby="exp-h" className="ablock">
          <h2 id="exp-h">Experience</h2>
          <ol className="tl">
            {experience.map((e, i) => (
              <li key={e.company} className={i === 0 ? 'now-item' : ''}><Reveal className="row">
                <span className="mono tl-date">{e.period}</span>
                <div>
                  <h3>{e.role}</h3>
                  <p className="company">{e.company}{e.place && `, ${e.place}`}</p>
                  <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal></li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="edu-h" className="ablock">
          <h2 id="edu-h">Education</h2>
          <div className="row">
            <span className="mono tl-date">{education.period}</span>
            <div><h3>{education.degree}</h3><p className="company">{education.school}</p><p className="muted">{education.detail}. Coursework: {education.coursework}.</p></div>
          </div>
        </section>

        <section aria-labelledby="cert-h" className="ablock">
          <h2 id="cert-h">Certifications</h2>
          {certifications.map((c) => (
            <div className="row" key={c.title}>
              <span className="mono tl-date">{c.period}</span>
              <div><h3>{c.title}</h3><p className="company">{c.issuer}</p></div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
