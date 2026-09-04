import React, {useState} from 'react'
import supabase from '../lib/supabaseClient'
import matchEngine from '../lib/matchingEngine'

export default function BuyerDashboard(){
  const [req, setReq] = useState({business:'', crop:'', quantity:100, max_price:0, location:'', date:'', time_window:''})
  const [matches, setMatches] = useState(null)

  async function findMatches(){
    const listings = await supabase.getProduceListings()
    const result = matchEngine.matchBulkRequirement(req, listings)
    setMatches(result)
  }

  return (
    <div className="container section grid-2">
      <div>
        <h2 className="kv">Buyer Dashboard</h2>
        <div className="card">
          <label className="small">Business name</label>
          <input value={req.business} onChange={e=>setReq({...req,business:e.target.value})} className="form-input" />
          <label className="small">Crop</label>
          <input value={req.crop} onChange={e=>setReq({...req,crop:e.target.value})} className="form-input" />
          <label className="small">Quantity (kg)</label>
          <input type="number" value={req.quantity} onChange={e=>setReq({...req,quantity:parseInt(e.target.value||0)})} className="form-input" />
          <label className="small">Max price (₹/kg)</label>
          <input type="number" value={req.max_price} onChange={e=>setReq({...req,max_price:parseFloat(e.target.value||0)})} className="form-input" />
          <label className="small">Delivery location</label>
          <input value={req.location} onChange={e=>setReq({...req,location:e.target.value})} className="form-input" />
          <div style={{marginTop:'0.5rem'}}>
            <button onClick={findMatches} className="btn btn-primary">Find Matching Supply</button>
          </div>
        </div>

        {matches && (
          <div className="card" style={{marginTop:'1rem'}}>
            <h4 className="kv">AI Recommended Supply</h4>
            <div className="small">Match score: {Math.round(matches.score)}%</div>
            <ul style={{marginTop:'0.5rem'}}>
              {matches.cluster.map((c,i)=> (
                <li key={i}>{c.crop} — {c.source.map(s=>s.farmer).join(', ')} — {c.total} kg</li>
              ))}
            </ul>
            <div style={{marginTop:'0.5rem'}}>
              <button className="btn btn-leaf">Request Supply</button>
            </div>
          </div>
        )}

      </div>
      <aside className="aside">
        <h4 className="kv">Matched Farmers</h4>
        <p className="small">Matches show why supply fits the request: quantity, price, proximity and date compatibility.</p>
      </aside>
    </div>
  )
}
