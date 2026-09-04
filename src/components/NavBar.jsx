import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <div className="brand">KisanLink AI</div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/farmers">Farmers</Link>
            <Link to="/buyers">Buyers</Link>
            <Link to="/market">Customers</Link>
            <a href="#ai">AI Engine</a>
            <a href="#impact">Impact</a>
            <a href="#insights">Insights</a>
          </nav>
        </div>
        <div className="header-actions">
          <Link to="/farmers" className="btn btn-primary">Farmer Login</Link>
          <Link to="/buyers" className="btn btn-secondary">Buyer Login</Link>
          <Link to="/market" className="btn btn-secondary">Customer Login</Link>
        </div>
      </div>
    </header>
  )
}
