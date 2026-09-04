// lightweight supabase client with demo-mode fallback
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

let demoMode = false
let db = null

if (SUPABASE_URL && SUPABASE_KEY) {
  db = createClient(SUPABASE_URL, SUPABASE_KEY)
} else {
  demoMode = true
  // load demo data in localStorage
  if(!localStorage.getItem('kisan_demo')){
    const demo = {
      listings:[
        {id:'l1', farmer:'Farmer A', crop:'Wheat', quantity:300, unit:'kg', price:22, quality:'Good', harvest_date:'2026-09-10', location:'Lucknow', reserved:0},
        {id:'l2', farmer:'Farmer B', crop:'Wheat', quantity:500, unit:'kg', price:21, quality:'Good', harvest_date:'2026-09-12', location:'Kanpur', reserved:0},
        {id:'l3', farmer:'Farmer C', crop:'Wheat', quantity:700, unit:'kg', price:23, quality:'Fair', harvest_date:'2026-09-15', location:'Lucknow', reserved:0},
        {id:'t1', farmer:'Farmer D', crop:'Tomato', quantity:500, unit:'kg', price:40, quality:'Fresh', harvest_date:'2026-09-08', location:'Lucknow', reserved:0}
      ]
    }
    localStorage.setItem('kisan_demo', JSON.stringify(demo))
  }
}

async function getProduceListings(){
  if(demoMode){
    const demo = JSON.parse(localStorage.getItem('kisan_demo'))
    return demo.listings
  }
  const { data } = await db.from('produce_listings').select('*')
  return data
}

async function addProduceListing(obj){
  if(demoMode){
    const demo = JSON.parse(localStorage.getItem('kisan_demo'))
    obj.id = 'l'+Math.random().toString(36).slice(2,9)
    demo.listings.push(obj)
    localStorage.setItem('kisan_demo', JSON.stringify(demo))
    return obj
  }
  const { data } = await db.from('produce_listings').insert([obj])
  return data
}

async function reserveInventory(id, qty){
  if(demoMode){
    const demo = JSON.parse(localStorage.getItem('kisan_demo'))
    const it = demo.listings.find(x=>x.id===id)
    if(!it) throw new Error('Not found')
    if(it.quantity - it.reserved < qty) throw new Error('Not enough available')
    it.reserved = (it.reserved||0)+qty
    it.quantity = it.quantity - qty
    localStorage.setItem('kisan_demo', JSON.stringify(demo))
    return true
  }
  // supabase update logic
  const { data } = await db.from('produce_listings').update({ reserved: db.raw('reserved + ?', [qty]) }).eq('id', id)
  return data
}

export default {
  getProduceListings,
  addProduceListing,
  reserveInventory,
  demoMode
}
