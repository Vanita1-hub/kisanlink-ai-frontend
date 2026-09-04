import React, {useEffect, useState} from 'react'
import supabase from '../lib/supabaseClient'
import ProduceForm from '../components/ProduceForm'

export default function FarmerDashboard(){
  const [listings, setListings] = useState([])

  async function load(){
    const res = await supabase.getProduceListings()
    setListings(res)
  }

  useEffect(()=>{ load() }, [])

  return (
    <div className="container section grid-2">
      <div>
        <h2 className="kv">Farmer Dashboard</h2>
        <ProduceForm onAdd={async ()=>{ await load() }} />

        <div style={{marginTop:'1rem'}}>
          <h3 className="kv">My Produce Listings</h3>
          <div style={{display:'grid',gap:'0.5rem'}}>
            {listings.length===0 && <div className="card">No listings yet. Use the form to add produce. Demo Data is available on first load.</div>}
            {listings.map(l => (
              <div key={l.id} className="listing">
                <div className="kv">{l.crop} — {l.quantity} {l.unit}</div>
                <div className="small">{l.quality} • {l.location} • Available from {l.harvest_date}</div>
                <div style={{marginTop:'0.5rem',fontWeight:600}}>₹{l.price}/kg</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className="aside">
        <h4 className="kv">Orders & Revenue</h4>
        <p className="small">Orders and statuses can be managed here in the full version.</p>
      </aside>
    </div>
  )
}
