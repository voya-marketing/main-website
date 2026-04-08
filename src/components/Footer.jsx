const NAV_LINKS = [
  { label: "Services",    id: "services"     },
  { label: "Our Work",    id: "work"         },
  { label: "Process",     id: "process"      },
  { label: "Results",     id: "results"      },
  { label: "Case Studies",id: "case-studies" },
  { label: "Contact",     id: "contact"      },
]

const SOCIAL_LINKS = [
  { label: "Instagram", url: "https://instagram.com"         },
  { label: "LinkedIn",  url: "https://linkedin.com"          },
  { label: "Twitter / X",url: "https://twitter.com"         },
  { label: "WhatsApp",  url: "https://wa.me/919876543210"    },
  { label: "Email Us",  url: "mailto:hello@voyamarketing.in" },
]

const SERVICES_LIST = [
  "SEO Optimization",
  "Social Media Marketing",
  "Paid Advertising",
  "Brand Strategy",
  "Content Creation",
  "Website Development",
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="nav-logo-icon">V</div>
              Voya
            </div>
            <p>
              Full-service digital marketing agency helping ambitious brands dominate online — with strategy, creative, and relentless execution.
            </p>
            <div className="footer-social">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.label}
                >
                  {s.label === "Instagram"  && "IG"}
                  {s.label === "LinkedIn"   && "LI"}
                  {s.label === "Twitter / X"&& "𝕏"}
                  {s.label === "WhatsApp"   && "WA"}
                  {s.label === "Email Us"   && "✉"}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES_LIST.map(item => (
                <li key={item} onClick={() => go("services")}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.id} onClick={() => go(link.id)}>{link.label}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              {SOCIAL_LINKS.map(s => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 12, color: "var(--text4)", marginBottom: 6 }}>Ahmedabad, Gujarat, India</p>
              <a href="mailto:hello@voyamarketing.in"
                style={{ fontSize: 13, color: "var(--text3)", textDecoration: "none" }}>
                hello@voyamarketing.in
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Voya Marketing Agency. All rights reserved.
          </span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
