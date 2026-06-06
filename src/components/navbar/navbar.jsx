import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50px, trigger the glass effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-wrapper">
          <img src="/images/logo/logo.png" alt="Stelle Logo" className="logo" />
        </div>

        {/* Links Section */}
{/* Links Section */}
<div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#company" className="nav-link">Company</a>
          
          {/* Dropdown Container */}
          <div className="nav-link dropdown">
            <span className="dropdown-trigger">
              Packages 
              <svg className="chevron" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            
            <div className="dropdown-menu">
              <a href="#domestic" className="dropdown-item">Domestic Tours</a>
              <a href="#international" className="dropdown-item">International Tours</a>
              <a href="#customized" className="dropdown-item">Customized Tours</a>
            </div>
          </div>

          <a href="#visa" className="nav-link">Visa & Passport</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;