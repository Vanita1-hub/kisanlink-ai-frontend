import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="text-kgreen font-bold text-xl">KisanLink AI</div>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link to="/" className="hover:text-teal">Home</Link>
            <Link to="/farmers" className="hover:text-teal">Farmers</Link>
            <Link to="/buyers" className="hover:text-teal">Buyers</Link>
            <Link to="/market" className="hover:text-teal">Customers</Link>
            <a href="#ai" className="hover:text-teal">AI Engine</a>
            <a href="#impact" className="hover:text-teal">Impact</a>
            <a href="#insights" className="hover:text-teal">Insights</a>
          </nav>
        </div>
        <div className="flex gap-3">
          <Link to="/farmers" className="px-3 py-1 bg-kgreen text-white rounded">Farmer Login</Link>
          <Link to="/buyers" className="px-3 py-1 border rounded">Buyer Login</Link>
          <Link to="/market" className="px-3 py-1 border rounded">Customer Login</Link>
        </div>
      </div>
    </header>
  )
}
