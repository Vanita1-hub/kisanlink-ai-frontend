// matchingEngine: deterministic match scoring and aggregation

function distanceScore(reqLoc, listingLoc){
  // prototype: if same city -> high score, otherwise moderate
  if(!reqLoc || !listingLoc) return 50
  if(reqLoc.toLowerCase().includes(listingLoc.toLowerCase()) || listingLoc.toLowerCase().includes(reqLoc.toLowerCase())) return 100
  return 60
}

function priceScore(reqPrice, listingPrice){
  if(!reqPrice || reqPrice<=0) return 80
  const diff = Math.max(0, reqPrice - listingPrice)
  return Math.max(20, Math.min(100, 80 + diff))
}

function matchBulkRequirement(req, listings){
  // find candidate listings of same crop
  const candidates = listings.filter(l=>l.crop.toLowerCase()=== (req.crop||'').toLowerCase())
  // sort by price asc and proximity via distanceScore (prototype)
  const scored = candidates.map(l=>{
    const sCrop = 100
    const sQty = Math.min(100, (l.quantity / Math.max(1, req.quantity)) * 100)
    const sDist = distanceScore(req.location, l.location)
    const sPrice = priceScore(req.max_price, l.price)
    const score = (sCrop*0.35 + Math.min(100,sQty)*0.25 + sDist*0.2 + sPrice*0.2)
    return {...l, score}
  }).sort((a,b)=>b.score-a.score)

  // aggregation: try combine top listings until requirement met
  let need = req.quantity
  const cluster = []
  for(const c of scored){
    if(need<=0) break
    const take = Math.min(need, c.quantity)
    cluster.push({ crop: c.crop, total: take, source:[{farmer:c.farmer, qty:take}], listingId:c.id })
    need -= take
  }

  const overallScore = scored.length>0 ? scored[0].score : 0
  return { score: overallScore, cluster, remaining: need }
}

export default {
  matchBulkRequirement
}
