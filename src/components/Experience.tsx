import { useLang } from '../i18n'
import './Experience.css'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experiencia">
      <div className="si">
        <div className="sec-label fi">{e.label}</div>
        <h2 className="sec-title fi" data-d="1">{e.title}</h2>
        <p className="sec-desc fi" data-d="2">{e.desc}</p>
        <div className="timeline fi" data-d="2">
          {e.jobs.map((job, i) => (
            <div key={i} className="tl-item">
              <div className="tl-date">
                <span className="tl-range">{job.from}<br />{job.to}</span>
                <span className="tl-loc">{job.location}</span>
              </div>
              <div className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-role">{job.role}</div>
                <div className="tl-company">{job.company}</div>
                <ul className="tl-list">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="tl-chips">
                  {job.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
