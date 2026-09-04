import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FarmerDashboard from './pages/FarmerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import CustomerMarketplace from './pages/CustomerMarketplace'
import NavBar from './components/NavBar'

export default function App(){
  return (
    <div className="min-h-screen text-charcoal">
      <NavBar />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/farmers" element={<FarmerDashboard/>} />
          <Route path="/buyers" element={<BuyerDashboard/>} />
          <Route path="/market" element={<CustomerMarketplace/>} />
        </Routes>
      </main>
    </div>
  )
}
