import { useEffect } from 'react'
import { SITE } from '@/config/site'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | Digital Solutions & Automation`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description || SITE.description)
  }, [title, description])
  return null
}
