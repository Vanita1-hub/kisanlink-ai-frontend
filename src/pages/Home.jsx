import React from 'react'
import VoiceButton from '../components/VoiceButton'

export default function Home(){
  return (
    <div>
      <section className="relative rounded overflow-hidden shadow-lg mb-8">
        <div className="h-80 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b4b7d1d3e5f9c3ff6e5d0e7303a9ef1')] bg-cover bg-center flex items-center">
          <div className="bg-black/40 p-8 w-full">
            <h1 className="text-4xl md:text-5xl text-white font-bold">From Farm Gate to Every Buyer.</h1>
            <p className="text-white/90 mt-3 max-w-2xl">KisanLink AI connects farmers directly with businesses and individual customers, intelligently matching supply with demand and optimizing fulfillment based on quantity, distance, time and route.</p>
            <div className="mt-4 flex gap-3">
              <a href="/farmers" className="px-4 py-2 bg-leaf text-white rounded">Sell Your Produce</a>
              <a href="/buyers" className="px-4 py-2 bg-kgreen text-white rounded">Buy in Bulk</a>
              <a href="/market" className="px-4 py-2 border rounded">Shop Fresh Produce</a>
              <VoiceButton/>
            </div>
            <div className="mt-6 text-white/80 flex gap-4 font-semibold">
              <span>CONNECT</span>
              <span>AGGREGATE</span>
              <span>MATCH</span>
              <span>OPTIMIZE</span>
              <span>DELIVER</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">Farm produce is available. The right buyer is often not.</h3>
          <p className="text-sm">Farmers face fragmented demand, limited market access, unsold surplus and high transport costs. Businesses face sourcing difficulties. Customers face limited direct access.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-bold mb-2">How KisanLink AI Works</h4>
          <ol className="list-decimal pl-5 text-sm">
            <li>Farmer lists produce</li>
            <li>KisanLink aggregates supply</li>
            <li>Demand matching (bulk & customers)</li>
            <li>Route intelligence & logistics estimation</li>
            <li>Fulfillment (pickup or third-party delivery)</li>
          </ol>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-bold mb-2">Prototype Features</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Farmer/Buyer/Customer dashboards</li>
            <li>Route-aware matching & aggregation</li>
            <li>Prototype logistics estimator</li>
            <li>Demo Data + Supabase integration support</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow mb-8" id="impact">
        <h3 className="text-xl font-bold mb-4">Connecting Every Farm to Every Kind of Buyer.</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h5 className="font-semibold">FARMERS</h5>
            <ul className="text-sm mt-2 list-disc pl-5">
              <li>Better market access</li>
              <li>Bulk + small orders</li>
              <li>Reduced intermediaries</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h5 className="font-semibold">BUSINESSES</h5>
            <ul className="text-sm mt-2 list-disc pl-5">
              <li>Reliable supply</li>
              <li>Aggregation</li>
              <li>Route-aware fulfillment</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h5 className="font-semibold">CUSTOMERS</h5>
            <ul className="text-sm mt-2 list-disc pl-5">
              <li>Farm-direct access</li>
              <li>Small quantities</li>
              <li>Local produce</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-sm text-slate-600">
        <p className="italic">Note: Logistics partner connection and voice AI require configuration — the demo uses prototype estimators when no API keys are provided.</p>
      </section>
    </div>
  )
}
