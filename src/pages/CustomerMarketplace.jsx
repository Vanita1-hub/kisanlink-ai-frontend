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
    <div className="container section grid-3">
      <div style={{gridColumn:'1 / span 2'}}>
        <h2 className="kv">Marketplace</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1rem'}}>
          {listings.map(l=> (
            <div key={l.id} className="card">
              <div className="kv">{l.crop}</div>
              <div className="small">{l.quantity} {l.unit} • ₹{l.price}/kg • {l.location}</div>
              <div style={{marginTop:'0.5rem',display:'flex',gap:'0.5rem'}}>
                <button onClick={()=>addToCart(l,2)} className="btn btn-primary">Add 2 kg</button>
                <button onClick={()=>addToCart(l,5)} className="btn btn-leaf">Add 5 kg</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="aside">
        <h4 className="kv">Cart</h4>
        {cart.length===0 && <div className="small">Cart is empty</div>}
        {cart.map(c=> (
          <div key={c.id} className="cart-item">
            <div className="small">{c.crop} • {c.qty} kg</div>
            <div>₹{(c.qty*c.price).toFixed(0)}</div>
          </div>
        ))}
        {cart.length>0 && <div style={{marginTop:'1rem'}}>
          <button onClick={()=>checkout('Demo address')} className="btn btn-teal">Place Order</button>
        </div>}
      </aside>
    </div>
  )
}
