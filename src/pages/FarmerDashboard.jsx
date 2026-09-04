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
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Farmer Dashboard</h2>
        <ProduceForm onAdd={async ()=>{ await load() }} />

        <div className="mt-6">
          <h3 className="font-semibold mb-2">My Produce Listings</h3>
          <div className="grid gap-3">
            {listings.length===0 && <div className="p-4 bg-white rounded shadow">No listings yet. Use the form to add produce. Demo Data is available on first load.</div>}
            {listings.map(l => (
              <div key={l.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
                <div>
                  <div className="font-semibold">{l.crop} — {l.quantity} {l.unit}</div>
                  <div className="text-sm text-slate-600">{l.quality} • {l.location} • Available from {l.harvest_date}</div>
                </div>
                <div className="text-sm">₹{l.price}/kg</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Orders & Revenue</h4>
        <p className="text-sm text-slate-600">Orders and statuses can be managed here in the full version.</p>
      </aside>
    </div>
  )
}
