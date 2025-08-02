import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, onSearch}) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container"> 
        <Link className="navbar-brand" to="/">My Store</Link> 
        <div className="collapse navbar-collapse"> 
          <ul className="navbar-nav me-auto"> 
            <li className="nav-item"> 
              <Link className="nav-link" to="/">Home</Link> 
            </li>
            <li className="nav-item"> 
              <Link className="nav-link" to="/cart">Cart ({cartCount})</Link> 
            </li>
          </ul>
          <form className="d-flex"> 
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar