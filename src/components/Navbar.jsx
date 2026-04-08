import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.svg"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Scroll effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const links = [
    { label: "Services", path: "/services" },
    { label: "Work", path: "/work" },
    { label: "Process", path: "/process" },
    { label: "Results", path: "/results" },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container nav-inner">

          {/* ✅ LOGO FIXED */}
          <NavLink to="/" className="nav-logo">
            <img src={logo} alt="Voya" className="nav-logo-img" />
            <span>Voya</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="nav-right">
            <NavLink to="/contact" className="nav-contact">
              Contact
            </NavLink>

            <NavLink to="/contact" className="nav-cta">
              Start Project →
            </NavLink>

            <button
              className={`nav-burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span />
              <span /><span />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {links.map(l => (
          <NavLink key={l.path} to={l.path} className="nm-link">
            {l.label}
          </NavLink>
        ))}

        <NavLink to="/contact" className="nm-link">
          Contact
        </NavLink>

        <NavLink to="/contact" className="btn-white" style={{ marginTop: 12 }}>
          Start Project →
        </NavLink>
      </div>
    </>
  )
}

export default Navbar