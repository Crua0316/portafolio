import { useLang } from '../i18n'
import './About.css'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="sobre">
      <div className="si">
        <div className="sec-label fi">{a.label}</div>
        <h2 className="sec-title fi" data-d="1">{a.title}</h2>
        <div className="about-grid fi" data-d="2">
          <div className="about-text">
            {a.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="hi-cards">
            {a.highlights.map(h => (
              <div key={h.title} className="hi-card">
                <span className="hi-icon" aria-hidden="true">{h.icon}</span>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
