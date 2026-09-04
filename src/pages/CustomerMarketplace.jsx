import React, {useEffect, useState} from 'react'
import supabase from '../lib/supabaseClient'

export default function CustomerMarketplace(){
  const [listings, setListings] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{ load() }, [])
  async function load(){
    const res = await supabase.getProduceListings()
    setListings(res)
  }

  function addToCart(item, qty){
    const existing = cart.find(c=>c.id===item.id)
    if(existing){
      setCart(cart.map(c=>c.id===item.id?{...c,qty:c.qty+qty}:c))
    } else setCart([...cart,{...item,qty}])
  }

  async function checkout(address){
    // simple reservation: decrease available
    for(const it of cart){
      await supabase.reserveInventory(it.id, it.qty)
    }
    alert('Order placed (prototype). Inventory updated in demo/supabase.')
    setCart([])
    load()
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {listings.map(l=> (
            <div key={l.id} className="p-4 bg-white rounded shadow">
              <div className="font-semibold">{l.crop}</div>
              <div className="text-sm text-slate-600">{l.quantity} {l.unit} • ₹{l.price}/kg • {l.location}</div>
              <div className="mt-2 flex gap-2">
                <button onClick={()=>addToCart(l,2)} className="px-2 py-1 bg-kgreen text-white rounded">Add 2 kg</button>
                <button onClick={()=>addToCart(l,5)} className="px-2 py-1 bg-leaf text-white rounded">Add 5 kg</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Cart</h4>
        {cart.length===0 && <div className="text-sm text-slate-600">Cart is empty</div>}
        {cart.map(c=> (
          <div key={c.id} className="flex justify-between items-center py-2">
            <div className="text-sm">{c.crop} • {c.qty} kg</div>
            <div>₹{(c.qty*c.price).toFixed(0)}</div>
          </div>
        ))}
        {cart.length>0 && <div className="mt-4">
          <button onClick={()=>checkout('Demo address')} className="px-3 py-2 bg-teal text-white rounded">Place Order</button>
        </div>}
      </aside>
    </div>
  )
}
