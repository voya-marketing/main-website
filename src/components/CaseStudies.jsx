import { useState } from "react"
import Modal from "./Modal"

const CASES = [
  {
    icon: "📸",
    cat: "Social Media",
    title: "How we grew a restaurant's Instagram 9× in 4 months",
    desc: "A complete Reels-first content strategy that turned a dormant account into the city's most-followed food page.",
    author: "Riya S.",
    initials: "RS",
    cls: "ca1",
    metric: "↑ 9× Followers",
    challenge: "The Brew Room had 2,000 Instagram followers, zero Reels strategy, and was spending ₹15K/month on paid promotion with almost no return. Their content was inconsistent and looked nothing like their actual brand.",
    solution: "We audited their top-performing competitors, rebuilt their visual identity for Instagram, and launched a Reels-first content calendar. Every week: 3 Reels, 4 feed posts, and daily Stories. We focused on behind-the-scenes content, staff stories, and food process videos.",
    result: "In 4 months, followers grew from 2K to 18K. Three Reels crossed 100K views organically. Instagram DMs became their number one reservation channel, eliminating the need for third-party booking platforms.",
    timeline: "4 months",
    industry: "F&B / Restaurant",
  },
  {
    icon: "🛍️",
    cat: "Paid Ads",
    title: "₹10L ad spend → ₹50L revenue for an e-commerce brand",
    desc: "Full-funnel Meta + Google campaign rebuild that tripled revenue while slashing cost-per-acquisition by 42%.",
    author: "Arjun M.",
    initials: "AM",
    cls: "ca2",
    metric: "↑ 300% Rev",
    challenge: "StyleLoop India was spending ₹10L/month on Meta ads targeting one broad audience with no retargeting, no creative testing, and a 1.8× ROAS. Their Google Shopping was never set up.",
    solution: "We rebuilt their entire paid stack: cold → warm → hot audience funnels on Meta, a full Google Shopping and Search campaign, dynamic product ads for retargeting, and a weekly creative sprint testing 3 new ad formats. We ran 12 creative variations in the first month alone.",
    result: "Monthly revenue grew from ₹17L to ₹50L in 60 days. CPA dropped from ₹480 to ₹278. ROAS hit 5.4×. Google Shopping now accounts for 35% of total paid revenue.",
    timeline: "60 days",
    industry: "E-commerce / Fashion",
  },
  {
    icon: "🌐",
    cat: "SEO",
    title: "From zero to 5× organic traffic in just 6 months",
    desc: "Technical SEO overhaul + content cluster strategy that put 12 keywords on Google's first page.",
    author: "Pooja D.",
    initials: "PD",
    cls: "ca3",
    metric: "↑ 5× Traffic",
    challenge: "NestCraft had a WordPress site with 42/100 PageSpeed score, no blog, duplicate meta tags, and zero backlinks. They were entirely dependent on paid ads and word-of-mouth for new leads.",
    solution: "We rebuilt the site on a clean architecture, fixed 200+ technical issues, and launched a content cluster strategy around high-intent local keywords. We published 24 long-form articles in 6 months and executed a white-hat link-building campaign targeting home improvement publications.",
    result: "Organic traffic grew 5× in 6 months. 12 keywords landed on page one of Google. Organic now drives 68% of all leads — and the cost-per-lead is 4× lower than their previous paid ads.",
    timeline: "6 months",
    industry: "Home Services / Local",
  },
]

function CaseStudies() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="cases-section" id="case-studies">
      <div className="container">
        <div className="badge-pill sa">Case Studies</div>
        <h2 className="section-h sa">Read our most recent wins.</h2>
        <p className="section-sub sa">
          Real stories from brands we've helped grow — click any card to read the full breakdown.
        </p>

        <div className="cases-grid">
          {CASES.map((c, i) => (
            <div
              className={`case-card sa-sc d${i + 1}`}
              key={i}
              onClick={() => setSelected(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(c)}
            >
              <div className="case-card-img">
                <span className="icon">{c.icon}</span>
              </div>
              <div className="case-card-body">
                <span className="case-category">{c.cat}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-card-footer">
                  <div className="case-author">
                    <div className={`case-author-img ${c.cls}`}>{c.initials}</div>
                    <span className="case-author-name">{c.author}</span>
                  </div>
                  <span className="case-metric-badge">{c.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="modal-case">
            <div className="modal-case-header">
              <span className="modal-tag">{selected.cat}</span>
              <h2 className="modal-title">{selected.title}</h2>
              <div className="modal-project-meta">
                <span>🏭 {selected.industry}</span>
                <span>⏱ {selected.timeline}</span>
                <span className="case-metric-badge">{selected.metric}</span>
              </div>
            </div>
            <div className="modal-case-sections">
              <div className="modal-case-block">
                <h4>🔴 The Challenge</h4>
                <p>{selected.challenge}</p>
              </div>
              <div className="modal-case-block">
                <h4>🟡 Our Solution</h4>
                <p>{selected.solution}</p>
              </div>
              <div className="modal-case-block modal-case-result">
                <h4>🟢 The Result</h4>
                <p>{selected.result}</p>
              </div>
            </div>
            <button
              className="btn-primary modal-cta"
              onClick={() => {
                setSelected(null)
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 200)
              }}
            >
              Want Similar Results? Let's Talk →
            </button>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default CaseStudies
