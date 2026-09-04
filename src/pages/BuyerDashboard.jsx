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
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Buyer Dashboard</h2>
        <div className="bg-white p-4 rounded shadow">
          <label className="block text-sm">Business name</label>
          <input value={req.business} onChange={e=>setReq({...req,business:e.target.value})} className="w-full p-2 border rounded mb-2" />
          <label className="block text-sm">Crop</label>
          <input value={req.crop} onChange={e=>setReq({...req,crop:e.target.value})} className="w-full p-2 border rounded mb-2" />
          <label className="block text-sm">Quantity (kg)</label>
          <input type="number" value={req.quantity} onChange={e=>setReq({...req,quantity:parseInt(e.target.value||0)})} className="w-full p-2 border rounded mb-2" />
          <label className="block text-sm">Max price (₹/kg)</label>
          <input type="number" value={req.max_price} onChange={e=>setReq({...req,max_price:parseFloat(e.target.value||0)})} className="w-full p-2 border rounded mb-2" />
          <label className="block text-sm">Delivery location</label>
          <input value={req.location} onChange={e=>setReq({...req,location:e.target.value})} className="w-full p-2 border rounded mb-2" />
          <button onClick={findMatches} className="mt-2 px-4 py-2 bg-kgreen text-white rounded">Find Matching Supply</button>
        </div>

        {matches && (
          <div className="mt-4 bg-white p-4 rounded shadow">
            <h4 className="font-semibold">AI Recommended Supply</h4>
            <div className="text-sm text-slate-600">Match score: {Math.round(matches.score)}%</div>
            <ul className="mt-2">
              {matches.cluster.map((c,i)=> (
                <li key={i}>{c.crop} — {c.source.map(s=>s.farmer).join(', ')} — {c.total} kg</li>
              ))}
            </ul>
            <div className="mt-2">
              <button className="px-3 py-1 bg-leaf text-white rounded">Request Supply</button>
            </div>
          </div>
        )}

      </div>
      <aside className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Matched Farmers</h4>
        <p className="text-sm text-slate-600">Matches show why supply fits the request: quantity, price, proximity and date compatibility.</p>
      </aside>
    </div>
  )
}
