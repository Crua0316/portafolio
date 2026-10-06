import { useLang } from '../../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  )
}
