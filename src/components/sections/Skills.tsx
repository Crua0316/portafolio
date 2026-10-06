import { useLang } from '../../i18n/LanguageContext'
import './Skills.css'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section className="skills-bg" id="skills">
      <div className="si">
        <div className="sec-label fi">{s.label}</div>
        <h2 className="sec-title fi" data-d="1">{s.title}</h2>
        <p className="sec-desc fi" data-d="2">{s.desc}</p>
        <div className="skills-grid fi" data-d="2">
          {s.groups.map(g => (
            <div key={g.name} className="sg">
              <div className="sg-head">
                <div
                  className="sg-icon"
                  style={{ background: `color-mix(in srgb, ${g.color} 14%, transparent)` }}
                  aria-hidden="true"
                >
                  {g.icon}
                </div>
                <h3>{g.name}</h3>
              </div>
              <div className="tags">
                {g.tags.map(tag => (
                  <span key={tag.name} className={`tag${'hot' in tag && tag.hot ? ' hot' : ''}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
