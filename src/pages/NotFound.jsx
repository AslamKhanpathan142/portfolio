import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="wrap page-head notfound">
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link className="btn btn-primary" to="/">Back to home</Link>
    </section>
  )
}
