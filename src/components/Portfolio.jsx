import { useState } from "react"
import Modal from "./Modal"

const PROJECTS = [
  {
    icon: "🍽️",
    tag: "Social Media",
    title: "Restaurant Chain Growth",
    desc: "Grew Instagram from 2K to 18K followers in 4 months with a Reels-first strategy.",
    metric: "↑ 9× Growth",
    delay: "d1",
    client: "The Brew Room, Ahmedabad",
    duration: "4 months",
    full: "The Brew Room came to us with a dormant Instagram account and zero content strategy. We audited their audience, rebuilt their visual identity for the platform, and launched a Reels-first content calendar focused on behind-the-scenes, food prep, and customer stories. Within 4 months, followers grew from 2K to 18K — and their DMs became their #1 reservation channel.",
    results: ["2K → 18K followers in 4 months", "9× engagement rate increase", "Instagram became #1 reservation source", "3 viral Reels (100K+ each)", "42% reduction in paid promotion spend"],
  },
  {
    icon: "👗",
    tag: "Paid Ads",
    title: "Fashion Brand Launch",
    desc: "Revenue increased 300% via full-funnel Meta + Google campaign. CPA dropped 42%.",
    metric: "↑ 300% Revenue",
    delay: "d2",
    client: "StyleLoop India, Mumbai",
    duration: "60 days",
    full: "StyleLoop India was burning money on single-audience Meta ads with no funnel structure. We rebuilt their entire paid strategy — cold audiences, retargeting, dynamic product ads, and Google Shopping — with a rigorous creative testing framework. Revenue tripled in 60 days while cost-per-acquisition dropped by 42%.",
    results: ["300% revenue increase in 60 days", "CPA dropped from ₹480 → ₹278", "ROAS improved from 1.8× to 5.4×", "12 winning ad creatives identified", "Meta + Google fully integrated funnel"],
  },
  {
    icon: "🏠",
    tag: "SEO",
    title: "Local Service SEO Domination",
    desc: "5× organic traffic in 6 months. 12 keywords on Google page one within Q1.",
    metric: "↑ 5× Traffic",
    delay: "d1",
    client: "NestCraft, Bangalore",
    duration: "6 months",
    full: "NestCraft, a home renovation service, had almost zero organic presence. We performed a full technical SEO audit, rebuilt their site architecture, created a location-based content cluster strategy, and executed a targeted link-building campaign. Within 6 months, organic traffic grew 5× and they ranked on page one for 12 high-intent keywords.",
    results: ["5× organic traffic growth", "12 keywords on Google page one", "Site speed improved from 42 → 94 (PageSpeed)", "Organic leads increased 8× vs paid leads", "Zero paid ads required after month 4"],
  },
  {
    icon: "🚀",
    tag: "Brand Strategy",
    title: "D2C Startup Scale-up",
    desc: "Built brand from zero to ₹2Cr monthly revenue through omnichannel strategy.",
    metric: "₹2Cr / month",
    delay: "d2",
    client: "Confidential D2C Brand",
    duration: "8 months",
    full: "This funded D2C startup had a great product but no brand presence, no paid strategy, and no organic footprint. We built everything from scratch — brand positioning, visual identity, website, SEO foundation, Meta/Google campaigns, and a social media presence. Eight months in, they hit ₹2Cr in monthly revenue and closed a Series A round.",
    results: ["₹0 → ₹2Cr monthly revenue", "Series A funding raised post-engagement", "Brand built from scratch in 6 weeks", "4.8× blended ROAS across all channels", "Website ranked on page one in 5 months"],
  },
]

function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="portfolio-section" id="work">
      <div className="container">
        <div className="portfolio-head">
          <div className="badge-pill sa">Selected Work</div>
          <h2 className="section-h sa">Projects we're proud of.</h2>
          <p className="section-sub sa">
            Real campaigns, real brands, real results. Click any project to read the full story.
          </p>
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <div
              className={`portfolio-card sa-sc ${p.delay}`}
              key={i}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
            >
              <div className="portfolio-card-img">
                <span className="icon">{p.icon}</span>
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="portfolio-card-meta">
                  <span className="portfolio-metric">{p.metric}</span>
                  <div className="portfolio-arrow">↗</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="modal-project">
            <div className="modal-project-header">
              <span className="modal-tag">{selected.tag}</span>
              <h2 className="modal-title">{selected.title}</h2>
              <div className="modal-project-meta">
                <span>📍 {selected.client}</span>
                <span>⏱ {selected.duration}</span>
              </div>
            </div>
            <p className="modal-body">{selected.full}</p>
            <div className="modal-results-grid">
              {selected.results.map((r, i) => (
                <div className="modal-result-item" key={i}>
                  <span className="modal-result-dot" />
                  {r}
                </div>
              ))}
            </div>
            <button
              className="btn-primary modal-cta"
              onClick={() => {
                setSelected(null)
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 200)
              }}
            >
              Get Results Like These →
            </button>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Portfolio
