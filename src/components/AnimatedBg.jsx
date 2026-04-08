import { useEffect, useRef, memo } from "react"

/* ─── Orb config ─────────────────────────────────────────────
   Each orb: position (%), size (vw), color, blur, animation
──────────────────────────────────────────────────────────────*/
const ORBS = [
  { top:  "8%",  left:  "10%", size: 38, color: "rgba(99,102,241,0.13)",  blur: 80,  dur: "22s", del: "0s"   },
  { top: "15%",  right:  "8%", size: 44, color: "rgba(139,92,246,0.10)",  blur: 90,  dur: "28s", del: "4s"   },
  { top: "45%",  left:  "55%", size: 52, color: "rgba(34,197,94,0.07)",   blur: 100, dur: "32s", del: "8s"   },
  { top: "65%",  left:   "5%", size: 36, color: "rgba(99,102,241,0.09)",  blur: 70,  dur: "25s", del: "2s"   },
  { top: "78%",  right:  "12%",size: 48, color: "rgba(245,158,11,0.06)",  blur: 95,  dur: "30s", del: "6s"   },
  { top: "35%",  left:  "28%", size: 28, color: "rgba(236,72,153,0.07)",  blur: 60,  dur: "20s", del: "10s"  },
  { top: "88%",  left:  "45%", size: 56, color: "rgba(99,102,241,0.08)",  blur: 110, dur: "35s", del: "3s"   },
]

/* ─── Canvas: subtle drifting particles ──────────────────── */
function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let raf
    let particles = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Spawn particles
    for (let i = 0; i < 55; i++) {
      particles.push({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        r:    Math.random() * 1.4 + 0.3,
        dx:   (Math.random() - 0.5) * 0.28,
        dy:  -(Math.random() * 0.35 + 0.08),
        a:    Math.random() * 0.45 + 0.08,
        life: Math.random() * 200,
        max:  Math.random() * 300 + 200,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x    += p.dx
        p.y    += p.dy
        p.life += 1
        if (p.life > p.max) {
          p.x    = Math.random() * canvas.width
          p.y    = canvas.height + 10
          p.life = 0
          p.max  = Math.random() * 300 + 200
        }
        const fade = p.life < 40
          ? p.life / 40
          : p.life > p.max - 40
          ? (p.max - p.life) / 40
          : 1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,180,255,${p.a * fade})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.6,
      }}
      aria-hidden="true"
    />
  )
}

/* ─── Main component ──────────────────────────────────────── */
function AnimatedBg() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>

      {/* Aurora orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top:   orb.top,
            left:  orb.left,
            right: orb.right,
            width:  `${orb.size}vw`,
            height: `${orb.size}vw`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            borderRadius: "50%",
            animation: `orbDrift ${orb.dur} ease-in-out infinite alternate`,
            animationDelay: orb.del,
            willChange: "transform",
          }}
        />
      ))}

      {/* Drifting canvas particles */}
      <ParticleCanvas />

      {/* Noise overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        opacity: 0.55,
        mixBlendMode: "overlay",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Diagonal scan line */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)",
        pointerEvents: "none",
      }} />

    </div>
  )
}

export default memo(AnimatedBg)
