import { useEffect, useRef } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const twRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Typewriter — resets when language changes */
  useEffect(() => {
    const phrases = t.hero.phrases as readonly string[]
    let pi = 0, ci = 0, del = false

    function tick() {
      const el = twRef.current
      if (!el) return
      const p = phrases[pi]
      if (!del) {
        el.textContent = p.slice(0, ++ci)
        if (ci === p.length) { del = true; timerRef.current = setTimeout(tick, 1900); return }
      } else {
        el.textContent = p.slice(0, --ci)
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length }
      }
      timerRef.current = setTimeout(tick, del ? 38 : 72)
    }

    if (timerRef.current) clearTimeout(timerRef.current)
    pi = 0; ci = 0; del = false
    tick()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [t.hero.phrases])

  /* Canvas particles */
  useEffect(() => {
    const ref = canvasRef.current
    if (!ref) return
    const canvas: HTMLCanvasElement = ref
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, raf = 0
    type Pt = { x: number; y: number; vx: number; vy: number; r: number; l: number }
    let pts: Pt[] = []

    function mkPt(): Pt {
      return { x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.4 + .4, l: Math.random() }
    }
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    function init() { resize(); pts = Array.from({ length: 80 }, mkPt) }

    function frame() {
      ctx.clearRect(0, 0, W, H)
      const rgb = theme === 'dark' ? '110,231,247' : '8,145,178'
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy; p.l += .0025
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H || p.l > 1) Object.assign(p, mkPt(), { l: 0 })
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28)
        ctx.fillStyle = `rgba(${rgb},${.25 + p.l * .3})`; ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(${rgb},${(1 - d / 90) * .12})`; ctx.lineWidth = .5; ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }

    init(); frame()
    const onResize = () => { cancelAnimationFrame(raf); init(); frame() }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [theme])

  return (
    <section className="hero" id="inicio">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-body">
          <div className="hero-text">
            <div className="hero-eyebrow">{t.hero.available}</div>
            <h1>
              Cristian<br />
              <span className="name-gradient">Esteban Rua</span><br />
              Giraldo
            </h1>
            <div className="hero-tw">
              <span ref={twRef} />
              <span className="tw-cursor" aria-hidden="true" />
            </div>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-cta">
              <a href="#experiencia" className="btn-primary">{t.hero.cta1} →</a>
              <a href="#contacto" className="btn-ghost">{t.hero.cta2}</a>
              <a
                href={t.hero.cvFile}
                download
                className="btn-cv"
                aria-label={t.hero.cta3}
              >
                ↓ {t.hero.cta3}
              </a>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map(s => (
                <div key={s.label} className="stat">
                  <span className="stat-num">{s.value}</span>
                  <span className="stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap" aria-hidden="true">
            <div className="hero-photo-glow" />
            <div className="hero-photo-frame">
              <img src="/photo.jpg" alt="Cristian Rua Giraldo" className="hero-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
