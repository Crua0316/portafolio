import { useState } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import './Projects.css'

const STATIC = [
  {
    id: 'flowsync',
    url: 'https://landing-demo-crua.vercel.app/',
    github: 'https://github.com/Crua0316/landing-demo',
    color: '#6366F1',
  },
  {
    id: 'nexusbi',
    url: 'https://dashboard-demo-crua.vercel.app/',
    github: 'https://github.com/Crua0316/dashboard-demo',
    color: '#8B5CF6',
  },
  {
    id: 'crud',
    url: null,
    github: null,
    color: '#10B981',
  },
] as const

export default function Projects() {
  const { t } = useLang()
  const s = t.projects
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})

  return (
    <section className="proj-bg" id="proyectos">
      <div className="si">
        <div className="sec-label fi">{s.label}</div>
        <h2 className="sec-title fi" data-d="1">{s.title}</h2>
        <p className="sec-desc fi" data-d="2">{s.desc}</p>

        <div className="proj-grid fi" data-d="3">
          {s.items.map((item, i) => {
            const p = STATIC[i]
            return (
              <article key={p.id} className={`proj-card${!p.url ? ' proj-soon' : ''}`}>
                {/* Browser chrome */}
                <div className="proj-browser">
                  <div className="proj-bar">
                    <span className="pdot pdot-r" />
                    <span className="pdot pdot-y" />
                    <span className="pdot pdot-g" />
                    <div className="proj-urlbar">
                      {p.url ? new URL(p.url).hostname : '— coming soon —'}
                    </div>
                  </div>
                  <div className="proj-viewport">
                    {p.url ? (
                      <>
                        {!loaded[p.id] && <div className="proj-skeleton" />}
                        <iframe
                          src={p.url}
                          title={item.title}
                          loading="lazy"
                          onLoad={() => setLoaded(prev => ({ ...prev, [p.id]: true }))}
                        />
                      </>
                    ) : (
                      <div className="proj-placeholder">
                        <span className="proj-badge">{s.soon}</span>
                        <p>{s.soonDesc}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="proj-info">
                  <div className="proj-row">
                    <h3 className="proj-name">{item.title}</h3>
                    <div className="proj-icons">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="proj-icon-btn"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                          </svg>
                        </a>
                      )}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver demo"
                          className="proj-icon-btn"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="proj-desc">{item.desc}</p>

                  <div className="proj-stack">
                    {item.stack.map(tag => (
                      <span key={tag} className="proj-chip">{tag}</span>
                    ))}
                  </div>

                  {p.url && (
                    <a
                      className="proj-cta"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ '--proj-c': p.color } as React.CSSProperties}
                    >
                      {s.cta}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
