import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { LuPhone, LuMapPin, LuSend, LuCheck, LuCopy } from 'react-icons/lu'
import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import Spot from '../components/Spot'
import { profile } from '../data/profile'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.'
  return e
}

export default function Contact() {
  usePageTitle('Contact', 'Get in touch with Mo Aslam Khan, Full Stack Developer based in Mehsana, India.')
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | mailto
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { window.location.href = `mailto:${profile.email}` } }
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (!ENDPOINT) {
      const body = encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + v.name)}&body=${body}`
      setStatus('mailto')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setV({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={`c-${k}`}>{label}</label>
      {k === 'message'
        ? <textarea id={`c-${k}`} rows={6} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`e-${k}`} />
        : <input id={`c-${k}`} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`e-${k}`} {...props} />}
      <p id={`e-${k}`} className="err" role="alert">{errors[k]}</p>
    </div>
  )

  return (
    <>
      <PageHeader title="Contact">Have a role, project or question in mind? Email is the fastest way to reach me.</PageHeader>
      <div className="wrap contact-grid">
        <div>
        <Spot className="mailcard"><a className="bigmail" href={`mailto:${profile.email}`}>{profile.email}</a><button className="btn btn-sm" type="button" onClick={copy}>{copied ? <><LuCheck size={15} /> Copied</> : <><LuCopy size={15} /> Copy</>}</button></Spot>
        <ul className="contact-list">
          <li><span className="ico"><LuPhone size={18} /></span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
          <li><span className="ico"><LuMapPin size={18} /></span>{profile.location}</li>
          <li><span className="ico"><FaLinkedinIn size={17} /></span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><span className="ico"><FaGithub size={18} /></span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
        </div>
        <Spot as="form" className="card form" onSubmit={submit} noValidate>
          {field('name', 'Name', { autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
          {field('message', 'Message')}
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : <>Send message <LuSend size={16} /></>}
          </button>
          <div aria-live="polite" className="form-status">
            {status === 'sent' && <p className="ok"><LuCheck size={16} /> Thanks, your message was sent.</p>}
            {status === 'error' && <p className="err">Something went wrong. Please email me directly instead.</p>}
            {status === 'mailto' && <p className="muted">Your email app should have opened with the message ready to send.</p>}
          </div>
        </Spot>
      </div>
    </>
  )
}
