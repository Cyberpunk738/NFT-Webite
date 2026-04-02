import React from 'react';
import './Navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className="nav-link">Community <span className="caret">▼</span></a>
        <a href="#" className="nav-link">Collections <span className="caret">▼</span></a>
        <a href="#" className="nav-link">Explore <span className="caret">▼</span></a>
      </div>
      
      <div className="nav-center">
        <div className="logo-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      </div>
      
      <div className="nav-right">
        <a href="#" className="nav-link">Marketplace <span className="caret">▼</span></a>
        <a href="#" className="nav-link">About Us <span className="caret">▼</span></a>
        <a href="#" className="nav-link">Log In</a>
        <Button variant="primary">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
