import React, {useState} from 'react'

export default function ProduceForm({onAdd}){
  const [form, setForm] = useState({crop:'Wheat', variety:'', quantity:100, unit:'kg', quality:'Good', harvest_date:'2026-09-10', price:20, location:'Lucknow'})
  async function submit(e){
    e.preventDefault()
    const supabase = (await import('../lib/supabaseClient.js')).default
    await supabase.addProduceListing({...form, farmer:'You'})
    alert('Produce listed (demo).')
    setForm({crop:'', variety:'', quantity:100, unit:'kg', quality:'Good', harvest_date:'', price:0, location:''})
    if(onAdd) onAdd()
  }

  return (
    <form onSubmit={submit} className="card">
      <h4 className="kv">List Produce</h4>
      <input placeholder="Crop" value={form.crop} onChange={e=>setForm({...form,crop:e.target.value})} className="form-input" />
      <div className="form-row" style={{marginTop:'0.5rem'}}>
        <input placeholder="Quantity" type="number" value={form.quantity} onChange={e=>setForm({...form,quantity:parseInt(e.target.value||0)})} className="form-input" />
        <input placeholder="Unit" value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})} className="form-input" />
      </div>
      <input placeholder="Price per kg" type="number" value={form.price} onChange={e=>setForm({...form,price:parseFloat(e.target.value||0)})} className="form-input" style={{marginTop:'0.5rem'}} />
      <input placeholder="Location (city)" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="form-input" style={{marginTop:'0.5rem'}} />
      <div style={{marginTop:'0.5rem'}}>
        <button className="btn btn-primary">Save</button>
      </div>
    </form>
  )
}
