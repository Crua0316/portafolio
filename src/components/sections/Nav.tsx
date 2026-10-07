import { useState } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import './Nav.css'

export default function Nav() {
  const { t, lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#sobre',      label: t.nav.about },
    { href: '#skills',     label: t.nav.skills },
    { href: '#proyectos',  label: t.nav.projects },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#educacion',  label: t.nav.education },
    { href: '#contacto',   label: t.nav.contact },
  ]

  return (
    <nav className="nav">
      <a className="nav-logo" href="#inicio">CRG</a>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="nav-btn" onClick={toggleLang} title="Switch language" aria-label="Switch language">
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <button className="nav-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀' : '◑'}
        </button>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
