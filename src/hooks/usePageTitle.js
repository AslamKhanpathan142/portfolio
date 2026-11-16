import { useEffect } from 'react'

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Mo Aslam Khan` : 'Mo Aslam Khan | Full Stack Developer'
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
