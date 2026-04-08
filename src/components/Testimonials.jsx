import { useState, useEffect, useCallback } from "react"

const TESTIMONIALS = [
  {
    quote: "Voya didn't just run our ads — they rebuilt how we think about growth. Our Instagram became our #1 lead channel within 3 months. Couldn't ask for a better team.",
    name: "Riya Sharma",
    role: "Founder, The Brew Room",
    initials: "RS",
    cls: "ta1",
  },
  {
    quote: "Every rupee we invested came back 5×. Their paid ads strategy is the best business decision we made last year. Fast, transparent, and genuinely obsessed with results.",
    name: "Arjun Mehta",
    role: "CEO, StyleLoop India",
    initials: "AM",
    cls: "ta2",
  },
  {
    quote: "Voya is fast, honest, and endlessly creative. Complete brand overhaul in under a month and the impact was immediate — website traffic tripled in six weeks.",
    name: "Pooja Desai",
    role: "Marketing Head, NestCraft",
    initials: "PD",
    cls: "ta3",
  },
  {
    quote: "What sets Voya apart is how much they actually care about your numbers. They pushed back on ideas that wouldn't work and proposed better ones. True partners.",
    name: "Karan Patel",
    role: "Co-founder, Orbis D2C",
    initials: "KP",
    cls: "ta1",
  },
  {
    quote: "Within 90 days of working with Voya, our cost-per-lead dropped by half and organic traffic doubled. I wish we'd hired them two years earlier.",
    name: "Sneha Joshi",
    role: "CMO, Zephyr Wellness",
    initials: "SJ",
    cls: "ta2",
  },
  {
    quote: "The team is responsive, creative, and data-obsessed. They don't just report numbers — they explain what the numbers mean and exactly what they're doing about it.",
    name: "Dev Malhotra",
    role: "Director, PrimeServe",
    initials: "DM",
    cls: "ta3",
  },
]

// Show 3 at a time on desktop, 1 on mobile
function Testimonials() {
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 3)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const totalPages = Math.ceil(TESTIMONIALS.length / perPage)
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage)

  const prev = useCallback(() => setPage(p => Math.max(0, p - 1)), [])
  const next = useCallback(() => setPage(p => Math.min(totalPages - 1, p + 1)), [totalPages])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setPage(p => (p + 1) % totalPages), 5000)
    return () => clearInterval(t)
  }, [totalPages])

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testi-head">
          <div className="badge-pill sa" style={{ margin: "0 auto 22px" }}>Client Stories</div>
          <h2 className="section-h sa">Don't just take our word for it.</h2>
          <p className="section-sub sa center">
            Hear directly from founders and marketing leaders we've helped dominate their markets.
          </p>
        </div>

        <div className="testi-carousel">
          <div className="testi-grid">
            {visible.map((t, i) => (
              <div className="testi-card" key={`${page}-${i}`}>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className={`testi-av ${t.cls}`}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="testi-controls">
            <button
              className="testi-btn"
              onClick={prev}
              disabled={page === 0}
              aria-label="Previous"
            >
              ←
            </button>

            <div className="testi-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === page ? "testi-dot-active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testi-btn"
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
