import { useCounter } from "../hooks/useCounter"

const STATS = [
  { target:250, sfx:"+",  label:"Campaigns Launched"  },
  { target:10,  sfx:"M+", label:"Total Ad Impressions" },
  { target:5,   sfx:"×",  label:"Average ROI Delivered" },
  { target:50,  sfx:"+",  label:"Brands Scaled"         },
]
const BENEFITS = [
  { icon:"📈", title:"Data-Driven Strategy",    desc:"Every decision backed by real analytics, A/B tests, and performance data — no guesswork, ever." },
  { icon:"🎨", title:"Creative That Converts",  desc:"Our designs don't just look good — they stop the scroll and turn viewers into paying customers." },
  { icon:"⚡", title:"Fast Execution",          desc:"From brief to live campaign in days, not weeks. Speed without sacrificing an ounce of quality." },
  { icon:"🔄", title:"Continuous Optimisation", desc:"We never set and forget. Constant iteration means your results compound and improve every month." },
]

function StatCard({ stat, delay }) {
  const { count, ref } = useCounter(stat.target, 1800)
  const display = stat.sfx === "M+" ? `${count}M` : `${count}`
  const suffix  = stat.sfx === "M+" ? "+" : stat.sfx
  return (
    <div className={`result-stat-card sa-sc d${delay}`} ref={ref}>
      <div className="rsn">{display}<span className="sfx">{suffix}</span></div>
      <div className="rsl">{stat.label}</div>
    </div>
  )
}

function Results() {
  return (
    <section className="results-section" id="results" aria-labelledby="results-heading">
      <div className="container">
        <div className="results-layout">
          <div>
            <div className="badge-pill sa-l">By The Numbers</div>
            <div className="results-stat-grid" role="list" aria-label="Agency statistics">
              {STATS.map((s, i) => <StatCard key={i} stat={s} delay={i+1} />)}
            </div>
          </div>
          <div className="sa-r">
            <div className="badge-pill">Our Impact</div>
            <h2 id="results-heading" className="section-h">Results that speak<br /><span>for themselves.</span></h2>
            <p className="section-sub" style={{ marginBottom:0 }}>We don't just run campaigns — we build growth engines. Here's what sets Voya apart.</p>
            <ul className="results-benefit-list" aria-label="Our advantages">
              {BENEFITS.map((b, i) => (
                <li className="benefit-row" key={i}>
                  <div className="benefit-icon" aria-hidden="true">{b.icon}</div>
                  <div className="benefit-text"><h3>{b.title}</h3><p>{b.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Results
