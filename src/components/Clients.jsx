const LOGOS = ["Google", "Meta", "Shopify", "HubSpot", "Mailchimp", "Canva"]

function Clients() {
  return (
    <div className="clients-section">
      <div className="container">
        <p className="clients-label">Trusted by growing brands across India</p>
        <div className="clients-logos">
          {LOGOS.map(l => (
            <span className="client-logo" key={l}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
