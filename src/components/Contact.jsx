import { useState } from "react"

const DETAILS = [
  { icon:"✉️", text:"hello@voyamarketing.in", href:"mailto:hello@voyamarketing.in", label:"Email us" },
  { icon:"📞", text:"+91 98765 43210",        href:"tel:+919876543210",             label:"Call us"  },
  { icon:"📍", text:"Ahmedabad, Gujarat, India", href:"https://maps.google.com/?q=Ahmedabad+Gujarat+India", label:"Find us on maps" },
]

function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 900)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left sa-l">
            <div className="badge-pill">Get In Touch</div>
            <h2 id="contact-heading" className="section-h">Let's build something<br />remarkable together.</h2>
            <p>Tell us about your brand and goals. We'll come back within 24 hours with a clear strategy tailored to your business.</p>
            <address className="contact-detail-list">
              {DETAILS.map(({ icon, text, href, label }, i) => (
                <div className="contact-detail" key={i}>
                  <div className="contact-detail-icon" aria-hidden="true">{icon}</div>
                  <a href={href} aria-label={label} style={{ color:"inherit", textDecoration:"none" }}>{text}</a>
                </div>
              ))}
            </address>
          </div>
          <div className="sa-r">
            <div className="contact-form-box">
              {sent ? (
                <div className="form-success" role="alert" aria-live="polite">
                  <div className="check" aria-hidden="true">✅</div>
                  <h3>Message sent!</h3>
                  <p>We'll reply within 24 hours. Talk soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="cf-name" className="form-label">Name</label>
                      <input id="cf-name" name="name" className="form-input" placeholder="Your name" required autoComplete="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-email" className="form-label">Email</label>
                      <input id="cf-email" name="email" className="form-input" type="email" placeholder="you@company.com" required autoComplete="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-company" className="form-label">Company</label>
                    <input id="cf-company" name="company" className="form-input" placeholder="Your company or brand" autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-budget" className="form-label">Budget Range</label>
                    <input id="cf-budget" name="budget" className="form-input" placeholder="e.g. ₹50K – ₹2L / month" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-message" className="form-label">Message</label>
                    <textarea id="cf-message" name="message" className="form-textarea" placeholder="Tell us about your project, goals, and current challenges…" />
                  </div>
                  <button type="submit" className="btn-white form-submit btn-glow" disabled={loading} aria-busy={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
