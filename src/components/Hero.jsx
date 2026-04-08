import { useEffect, useRef } from "react"

/* Splits a string into individually-animated word spans */
function AnimWords({ text, baseDelay = 0, className = "" }) {

  useEffect(() => {
  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20

    const el = document.querySelector(".hero-visual")
    if (el) {
      el.style.transform = `translate(${x}px, ${y}px)`
    }
  }

  window.addEventListener("mousemove", handleMove)
  return () => window.removeEventListener("mousemove", handleMove)
}, [])
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="anim-word"
          style={{ animationDelay: `${baseDelay + i * 0.07}s` }}
        >
          {word}
          {i < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  )
}



function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="hero" id="hero" aria-label="Hero — Voya Digital Marketing Agency">

      <div className="container hero-inner">

        {/* ── LEFT ─────────────────────────────────────── */}
        <div className="hero-left">

          <div className="hero-eyebrow" role="note">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            India's #1 Digital Marketing Agency
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">
              <AnimWords text="Scale Your Brand" baseDelay={0.1} />
            </span>
            <br />
            <span className="hero-title-line hl">
              <AnimWords text="With Strategy &" baseDelay={0.28} />
            </span>
            <br />
            <span className="hero-title-line">
              <AnimWords text="Performance." baseDelay={0.44} />
            </span>
          </h1>

          <p className="hero-desc" style={{ animationDelay: "0.62s" }}>
            Voya helps ambitious businesses dominate digital — through
            data-driven marketing, stunning creative, and relentless
            execution that delivers measurable ROI.
          </p>

          <div className="hero-btns" style={{ animationDelay: "0.72s" }}>
            <button className="btn-white btn-glow" onClick={() => go("contact")}>
              Start Your Project →
            </button>
            <button className="btn-ghost" onClick={() => go("work")}>
              View Our Work
            </button>
          </div>

          <div className="hero-mini-stats" style={{ animationDelay: "0.84s" }}>
            {[
              { num: "100", sfx: "+", label: "Projects Delivered" },
              { num: "50",  sfx: "+", label: "Brands Scaled"      },
              { num: "10M", sfx: "+", label: "Ad Impressions"     },
            ].map(s => (
              <div key={s.label} className="hero-mini-stat">
                <div className="hero-mini-num">{s.num}<span>{s.sfx}</span></div>
                <div className="hero-mini-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Visual ────────────────────────────── */}
        <div className="hero-visual" aria-hidden="true">

          {[
            { w:10, h:10, top:"14%", left:"18%", dur:"9s",   del:"0s"   },
            { w:6,  h:6,  top:"72%", right:"22%",dur:"7s",   del:"2s"   },
            { w:8,  h:8,  bottom:"18%",left:"42%",dur:"11s", del:"1.2s" },
          ].map((p, i) => (
            <div key={i} className="hero-particle" style={{
              width: p.w, height: p.h,
              top: p.top, left: p.left, right: p.right, bottom: p.bottom,
              animationDuration: p.dur, animationDelay: p.del,
            }} />
          ))}

          <div className="hero-blob-wrap">
            <svg className="hero-blob" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decorative abstract shape">
              <defs>
                <radialGradient id="g1" cx="35%" cy="30%" r="65%">
                  <stop offset="0%"   stopColor="#E2E8F0" stopOpacity="0.95"/>
                  <stop offset="25%"  stopColor="#CBD5E1" stopOpacity="0.80"/>
                  <stop offset="50%"  stopColor="#94A3B8" stopOpacity="0.60"/>
                  <stop offset="75%"  stopColor="#475569" stopOpacity="0.40"/>
                  <stop offset="100%" stopColor="#1E293B" stopOpacity="0.10"/>
                </radialGradient>
                <radialGradient id="g2" cx="70%" cy="65%" r="55%">
                  <stop offset="0%"   stopColor="#F8FAFC" stopOpacity="0.60"/>
                  <stop offset="40%"  stopColor="#CBD5E1" stopOpacity="0.30"/>
                  <stop offset="100%" stopColor="#0F172A"  stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="g3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="rgba(99,102,241,0.3)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
                <filter id="bl1"><feGaussianBlur stdDeviation="3"/></filter>
                <filter id="bl2"><feGaussianBlur stdDeviation="8"/></filter>
                <filter id="bl3"><feGaussianBlur stdDeviation="18"/></filter>
              </defs>
              <ellipse cx="210" cy="210" rx="190" ry="185" fill="url(#g3)" filter="url(#bl3)" opacity="0.5"/>
              <path d="M210,30 C290,15,380,70,395,160 C412,255,365,340,285,385 C200,432,100,420,50,355 C-5,285,8,175,55,105 C100,38,135,45,210,30Z" fill="url(#g1)"/>
              <path d="M210,30 C290,15,380,70,395,160 C412,255,365,340,285,385 C200,432,100,420,50,355 C-5,285,8,175,55,105 C100,38,135,45,210,30Z" fill="url(#g2)" opacity="0.7"/>
              <path d="M120,80 C160,55,240,48,300,85 C360,122,388,195,375,265" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="18" strokeLinecap="round" filter="url(#bl1)" opacity="0.6"/>
              <path d="M120,80 C160,55,240,48,300,85 C360,122,388,195,375,265" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="5" strokeLinecap="round" opacity="0.8"/>
              <path d="M80,200 C95,270,140,330,200,358 C260,386,320,375,355,335" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="14" strokeLinecap="round" filter="url(#bl1)" opacity="0.5"/>
              <path d="M80,200 C95,270,140,330,200,358 C260,386,320,375,355,335" fill="none" stroke="rgba(255,255,255,0.72)" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
              <ellipse cx="160" cy="120" rx="55" ry="30" fill="white" opacity="0.16" transform="rotate(-25,160,120)" filter="url(#bl1)"/>
              <ellipse cx="175" cy="112" rx="28" ry="14" fill="white" opacity="0.30" transform="rotate(-25,175,112)"/>
              <path d="M320,300 C340,340,320,380,280,390 C240,400,180,385,150,360 C120,335,110,290,130,260" fill="rgba(0,0,0,0.22)" filter="url(#bl2)"/>
              <ellipse cx="280" cy="160" rx="60" ry="40" fill="rgba(99,102,241,0.22)" filter="url(#bl2)" transform="rotate(15,280,160)" opacity="0.6"/>
            </svg>
          </div>

          {/* Floating metric cards */}
          <article className="hero-card hero-card-1">
            <div className="hc-label">Engagement Rate</div>
            <div className="hc-value">8.4%</div>
            <div className="hc-change">↑ +2.1% this month</div>
            <div className="hc-bar" aria-hidden="true">
              {[40,65,45,80,55,90,70,95].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }}
                  className={i === 7 ? "hi" : i === 5 ? "active" : ""} />
              ))}
            </div>
          </article>

          <article className="hero-card hero-card-2">
            <div className="hc-label">Active Campaigns</div>
            <div className="hc-value" style={{ marginBottom: 0 }}>12</div>
            <div className="hc-row">
              <div className="hc-av-stack" aria-hidden="true">
                <div className="hc-av av1">M</div>
                <div className="hc-av av2">G</div>
                <div className="hc-av av3">T</div>
              </div>
              <div className="hc-meta">Meta · Google · TikTok</div>
            </div>
          </article>

          <article className="hero-card hero-card-3">
            <div className="hc-label">Avg. ROAS</div>
            <div className="hc-value">5.2×</div>
            <div className="hc-change">↑ From ₹1 → ₹5.2</div>
          </article>
        </div>

      </div>
      
    </section>
    
  )
}


export default Hero
