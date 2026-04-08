import { useState } from "react"
import Modal from "./Modal"

const SERVICES = [
  { icon:"🔍", title:"SEO Optimization",       badge:"Organic Growth",  desc:"Rank higher on Google and drive organic traffic that converts. We build long-term search dominance.", full:"We conduct a deep technical audit of your website, identify high-opportunity keywords, fix crawlability issues, and build a content strategy that earns topical authority. Our link-building campaigns put you on the radar of the right publications. Most clients see measurable ranking improvements within 60–90 days.", bullets:["Technical SEO audit & fixes","Keyword & competitor research","Content cluster strategy","High-authority link building","Monthly performance reporting"] },
  { icon:"📱", title:"Social Media Marketing", badge:"Audience Growth",  desc:"Platform-native content strategy that turns followers into loyal customers across every channel.", full:"We manage your presence on Instagram, LinkedIn, Facebook, and beyond. Every post is crafted around platform-native formats — Reels, carousels, Stories — designed to grow your audience and build community. We handle content calendars, captions, hashtag strategy, community management, and monthly analytics reviews.", bullets:["Instagram, LinkedIn & Facebook management","Reels & short-form video production","Content calendar & scheduling","Community management & DM handling","Monthly analytics & strategy review"] },
  { icon:"📢", title:"Paid Advertising",       badge:"Avg. 5× ROAS",    desc:"High-ROI campaigns on Meta, Google, and TikTok. Every rupee tracked, every creative split-tested.", full:"We build full-funnel paid campaigns across Meta, Google Search, YouTube, and TikTok. From audience architecture and creative strategy to daily bid optimisation and weekly reporting — we treat your ad budget like our own. Our average client achieves 4–6× ROAS within 90 days.", bullets:["Meta & Google campaign setup","Full-funnel strategy (TOFU → BOFU)","Creative A/B testing framework","Daily bid & audience optimisation","Weekly ROAS & CPA reporting"] },
  { icon:"🎯", title:"Brand Strategy",         badge:"Brand Identity",  desc:"Positioning, identity and messaging that make your brand the obvious choice in your market.", full:"Before running a single ad or publishing a post, you need a brand that people actually remember. We help you define your positioning, craft your brand voice, build your visual identity system, and create messaging frameworks your whole team can use.", bullets:["Market positioning & differentiation","Brand voice & messaging framework","Visual identity system","Competitor landscape analysis","Brand guidelines document"] },
  { icon:"✏️", title:"Content Creation",       badge:"Creative Studio", desc:"Scroll-stopping Reels, carousels, copy, and visuals crafted for your exact target audience.", full:"Our in-house creative team produces photo, video, and copy content tailored to each platform. We handle everything from scripting and shooting to editing and captioning. Whether you need 30 posts a month or a single viral campaign, we bring the creative firepower.", bullets:["Short-form video & Reels production","Carousel & static graphic design","Long-form copywriting & blogs","Ad creative for paid campaigns","Branded template library"] },
  { icon:"💻", title:"Website Development",    badge:"Web Dev",         desc:"Fast, beautiful, conversion-focused websites built to rank on Google and grow your business.", full:"We design and build React or WordPress websites that are fast, SEO-ready, and conversion-optimised from day one. Every site we ship scores 90+ on Google PageSpeed, is fully responsive, and includes built-in analytics setup so you can track what matters.", bullets:["React / Next.js or WordPress development","Mobile-first, responsive design","90+ PageSpeed score guaranteed","On-page SEO baked in","Analytics & heatmap setup"] },
]

function Services() {
  const [selected, setSelected] = useState(null)
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <header className="services-head">
          <div className="badge-pill sa">Explore Services</div>
          <h2 id="services-heading" className="section-h sa">Everything you need to<br /><span>dominate online.</span></h2>
          <p className="section-sub center sa">Full-service digital marketing from a team obsessed with one thing — measurable results for your brand.</p>
        </header>
        <div className="services-grid" role="list">
          {SERVICES.map((s, i) => (
            <article className={`service-card sa-sc d${(i % 3) + 1}`} key={i} onClick={() => setSelected(s)} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && setSelected(s)} aria-label={`Learn more about ${s.title}`}>
              <div className="service-icon-box" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="modal-service">
            <div className="modal-service-header">
              <div className="modal-icon-box" aria-hidden="true">{selected.icon}</div>
              <div><span className="modal-badge">{selected.badge}</span><h2 className="modal-title">{selected.title}</h2></div>
            </div>
            <p className="modal-body">{selected.full}</p>
            <ul className="modal-bullets" aria-label="What's included">
              {selected.bullets.map((b, i) => (<li key={i}><span className="modal-bullet-dot" aria-hidden="true" />{b}</li>))}
            </ul>
            <button className="btn-primary modal-cta" onClick={() => { setSelected(null); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 200) }}>Get Started with {selected.title} →</button>
          </div>
        )}
      </Modal>
    </section>
  )
}
export default Services
