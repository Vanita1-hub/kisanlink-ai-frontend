// prototype logistics provider

function haversineKm(a,b){
  // a and b are city names in prototype. We'll simulate distance by string similarity
  if(!a || !b) return 20
  if(a.toLowerCase().includes(b.toLowerCase()) || b.toLowerCase().includes(a.toLowerCase())) return 5
  // simple hash
  return Math.abs(a.length - b.length) + 10
}

function getQuote({from, to, quantity}){
  const distance = haversineKm(from,to)
  const speedKmh = 30
  const timeMin = Math.round((distance / speedKmh) * 60)
  const base = 50
  const perKm = 4
  const perKg = 0.5
  const cost = Math.round(base + distance*perKm + quantity*perKg)
  return { distance, timeMin, cost, provider:'Prototype Logistics', note:'Prototype logistics estimation' }
}

export default { getQuote }
