function CTA() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box sa">
          <div className="badge-pill">Ready To Grow?</div>
          <h2 className="section-h">
            Scale your brand<br />
            <span>with Voya.</span>
          </h2>
          <p className="section-sub center">
            Book a free 30-minute strategy session. No commitment, no fluff — just a clear, actionable plan for your brand's next stage of growth.
          </p>
          <div className="cta-box-btns">
            <button className="btn-white" onClick={() => go("contact")}>
              Book Free Session →
            </button>
            <button className="btn-ghost" onClick={() => go("work")}>
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
