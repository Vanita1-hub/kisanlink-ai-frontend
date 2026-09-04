import React, {useState} from 'react'

export default function ProduceForm({onAdd}){
  const [form, setForm] = useState({crop:'Wheat', variety:'', quantity:100, unit:'kg', quality:'Good', harvest_date:'2026-09-10', price:20, location:'Lucknow'})
  async function submit(e){
    e.preventDefault()
    // add to supabase demo
    const supabase = (await import('../lib/supabaseClient.js')).default
    await supabase.addProduceListing({...form, farmer:'You'})
    alert('Produce listed (demo).')
    setForm({crop:'', variety:'', quantity:100, unit:'kg', quality:'Good', harvest_date:'', price:0, location:''})
    if(onAdd) onAdd()
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-2">List Produce</h4>
      <input placeholder="Crop" value={form.crop} onChange={e=>setForm({...form,crop:e.target.value})} className="w-full p-2 border rounded mb-2" />
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="Quantity" type="number" value={form.quantity} onChange={e=>setForm({...form,quantity:parseInt(e.target.value||0)})} className="p-2 border rounded" />
        <input placeholder="Unit" value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})} className="p-2 border rounded" />
      </div>
      <input placeholder="Price per kg" type="number" value={form.price} onChange={e=>setForm({...form,price:parseFloat(e.target.value||0)})} className="w-full p-2 border rounded mb-2 mt-2" />
      <input placeholder="Location (city)" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="w-full p-2 border rounded mb-2" />
      <div className="flex gap-2">
        <button className="px-3 py-2 bg-kgreen text-white rounded" type="submit">Save</button>
      </div>
    </form>
  )
}
