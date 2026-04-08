import { useCounter } from "../hooks/useCounter"

const STATS = [
  { target: 100, display: (n) => `${n}`,  sfx: "+",  label: "Projects Delivered"       },
  { target: 50,  display: (n) => `${n}`,  sfx: "+",  label: "Brands Scaled"            },
  { target: 10,  display: (n) => `${n}M`, sfx: "+",  label: "Ad Impressions Generated" },
  { target: 5,   display: (n) => `${n}`,  sfx: "×",  label: "Average Client ROI"       },
]

function StatItem({ stat, delay }) {
  const { count, ref } = useCounter(stat.target, 1800)
  return (
    <div className="stat-item sa" ref={ref} style={{ animationDelay: `${delay}s` }}>
      <div className="stat-num">
        {stat.display(count)}<span className="sfx">{stat.sfx}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

function Stats() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <StatItem key={i} stat={s} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
