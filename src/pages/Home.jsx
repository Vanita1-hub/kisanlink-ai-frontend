import React from 'react'
import VoiceButton from '../components/VoiceButton'

export default function Home(){
  return (
    <div>
      <section className="hero section">
        <div className="container hero-overlay">
          <h1>From Farm Gate to Every Buyer.</h1>
          <p>KisanLink AI connects farmers directly with businesses and individual customers, intelligently matching supply with demand and optimizing fulfillment based on quantity, distance, time and route.</p>
          <div style={{marginTop:'1rem',display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
            <a href="/farmers" className="btn btn-leaf">Sell Your Produce</a>
            <a href="/buyers" className="btn btn-primary">Buy in Bulk</a>
            <a href="/market" className="btn btn-secondary">Shop Fresh Produce</a>
            <VoiceButton />
          </div>
          <div style={{marginTop:'1rem',display:'flex',gap:'1rem',fontWeight:700,opacity:0.95}}>
            <span>CONNECT</span>
            <span>AGGREGATE</span>
            <span>MATCH</span>
            <span>OPTIMIZE</span>
            <span>DELIVER</span>
          </div>
        </div>
      </section>

      <section className="container section grid-3">
        <div className="card">
          <h3 className="kv">Farm produce is available. The right buyer is often not.</h3>
          <p className="small">Farmers face fragmented demand, limited market access, unsold surplus and high transport costs. Businesses face sourcing difficulties. Customers face limited direct access.</p>
        </div>
        <div className="card">
          <h4 className="kv">How KisanLink AI Works</h4>
          <ol className="small">
            <li>Farmer lists produce</li>
            <li>KisanLink aggregates supply</li>
            <li>Demand matching (bulk & customers)</li>
            <li>Route intelligence & logistics estimation</li>
            <li>Fulfillment (pickup or third-party delivery)</li>
          </ol>
        </div>
        <div className="card">
          <h4 className="kv">Prototype Features</h4>
          <ul className="small">
            <li>Farmer/Buyer/Customer dashboards</li>
            <li>Route-aware matching & aggregation</li>
            <li>Prototype logistics estimator</li>
            <li>Demo Data + Supabase integration support</li>
          </ul>
        </div>
      </section>

      <section className="container section card" id="impact">
        <h3 className="kv">Connecting Every Farm to Every Kind of Buyer.</h3>
        <div className="grid-3" style={{marginTop:'1rem'}}>
          <div>
            <h5 className="kv">FARMERS</h5>
            <ul className="small">
              <li>Better market access</li>
              <li>Bulk + small orders</li>
              <li>Reduced intermediaries</li>
            </ul>
          </div>
          <div>
            <h5 className="kv">BUSINESSES</h5>
            <ul className="small">
              <li>Reliable supply</li>
              <li>Aggregation</li>
              <li>Route-aware fulfillment</li>
            </ul>
          </div>
          <div>
            <h5 className="kv">CUSTOMERS</h5>
            <ul className="small">
              <li>Farm-direct access</li>
              <li>Small quantities</li>
              <li>Local produce</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container small">
        <p className="footer-note">Note: Logistics partner connection and voice AI require configuration — the demo uses prototype estimators when no API keys are provided.</p>
      </section>
    </div>
  )
}
