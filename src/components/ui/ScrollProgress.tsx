import { useEffect, useState } from 'react'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      const p = total > 0 ? (scrolled / total) * 100 : 0
      setPct(p)
      setVisible(scrolled > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="scroll-bar" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
        <div className="scroll-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <button
        className={`back-top${visible ? ' back-top--show' : ''}`}
        onClick={scrollTop}
        aria-label="Volver arriba"
      >
        ↑
      </button>
    </>
  )
}
