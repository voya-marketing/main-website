import { useState } from "react"

const STEPS = [
  {
    num: "01",
    title: "Discovery & Research",
    desc: "We audit your market, competitors, and audience before touching a single ad or post. No assumptions — only verified insights.",
    detail: "This phase typically takes 3–5 days. We use tools like SEMrush, Ahrefs, Meta Ads Library, and direct competitor analysis to build a full picture of your market. You'll receive a written Discovery Report with key findings before we move forward.",
  },
  {
    num: "02",
    title: "Strategy Development",
    desc: "A custom growth plan built around your specific goals, budget, and timeline. Clear deliverables, clear KPIs.",
    detail: "We build a 90-day roadmap with specific monthly targets — follower growth, ROAS, traffic, leads — tailored to your budget. You'll review and sign off on the strategy before any work begins. No surprises.",
  },
  {
    num: "03",
    title: "Creative Production",
    desc: "Thumb-stopping visuals, Reels, and copy crafted precisely for your target audience.",
    detail: "Our in-house creative team produces all assets: ad creatives, social content, landing page copy, and video scripts. Everything is delivered in a shared workspace for your review and feedback before publishing. We typically produce 12–20 assets per month.",
  },
  {
    num: "04",
    title: "Launch & Optimise",
    desc: "Go live fast, then iterate daily based on real performance data. We compound gains every week.",
    detail: "After launch, you receive weekly performance reports every Monday. We hold a monthly strategy call to review results, adjust targeting, and plan the next month. Our average client sees meaningful improvement within the first 30 days.",
  },
]

function Process() {
  const [open, setOpen] = useState(null)

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-layout">

          {/* Left: text */}
          <div className="process-text sa-l">
            <div className="badge-pill">How We Work</div>
            <h2 className="section-h">
              A proven process.<br />
              <span>Predictable results.</span>
            </h2>
            <p className="section-sub">
              No guesswork. No surprises. Our 4-step system has delivered consistent growth for every brand we've worked with — from local businesses to funded startups.
            </p>
            <button
              className="btn-primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project →
            </button>
          </div>

          {/* Right: accordion steps */}
          <div className="process-steps sa-r">
            {STEPS.map((s, i) => {
              const isOpen = open === i
              return (
                <div
                  className={`process-step ${isOpen ? "process-step-open" : ""}`}
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setOpen(isOpen ? null : i)}
                >
                  <div className="step-num">{s.num}</div>
                  <div className="step-body">
                    <div className="step-title-row">
                      <h3>{s.title}</h3>
                      <span className="step-chevron">{isOpen ? "−" : "+"}</span>
                    </div>
                    <p>{s.desc}</p>
                    {isOpen && (
                      <p className="step-detail">{s.detail}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process
