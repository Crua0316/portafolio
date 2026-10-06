import { useLang } from '../i18n'
import './Education.css'

export default function Education() {
  const { t } = useLang()
  const e = t.education

  return (
    <section className="edu-bg" id="educacion">
      <div className="si">
        <div className="sec-label fi">{e.label}</div>
        <h2 className="sec-title fi" data-d="1">{e.title}</h2>
        <p className="sec-desc fi" data-d="2">{e.desc}</p>
        <div className="edu-grid fi" data-d="2">
          {e.items.map(item => (
            <div key={item.degree} className="edu-card">
              <div className="edu-yr">{item.year}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-inst">{item.institution}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
