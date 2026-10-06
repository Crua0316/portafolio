import { useLang } from '../../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contacto">
      <div className="si">
        <div className="sec-label fi">{c.label}</div>
        <h2 className="sec-title fi" data-d="1">{c.title}</h2>
        <div className="contact-grid fi" data-d="2">
          <div className="contact-intro">
            <p>{c.intro}</p>
            <div className="contact-rows">
              {c.links.map(link => (
                <div key={link.label} className={`clink clink-${link.bg}`}>
                  <span className="clink-ico" aria-hidden="true">{link.icon}</span>
                  <div>
                    <div className="clink-lbl">{link.label}</div>
                    <div className="clink-val">{link.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-card">
            <div className="avatar">
              <img src="/photo.jpg" alt="Cristian Rua Giraldo" className="avatar-img" />
            </div>
            <div className="avail-badge">
              <span className="avail-dot" aria-hidden="true" />
              {c.available}
            </div>
            <h3>Cristian Rua Giraldo</h3>
            <p className="pc-role">{c.role}</p>
            <p className="pc-stack">{c.stack}</p>
            <p className="pc-loc">{c.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
