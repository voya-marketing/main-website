import { useState, useEffect } from "react"

const SECTIONS = [
  { id: "hero",         label: "Home"       },
  { id: "services",    label: "Services"   },
  { id: "results",     label: "Results"    },
  { id: "work",        label: "Work"       },
  { id: "process",     label: "Process"    },
  { id: "case-studies",label: "Cases"      },
  { id: "testimonials",label: "Clients"    },
  { id: "contact",     label: "Contact"    },
]

function SideNav() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.35 }
    )

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sidenav" aria-label="Section navigation">
      {SECTIONS.map(s => (
        <button
          key={s.id}
          className={`sidenav-item ${active === s.id ? "sidenav-active" : ""}`}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={s.label}
        >
          <span className="sidenav-dot" />
          <span className="sidenav-label">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default SideNav
