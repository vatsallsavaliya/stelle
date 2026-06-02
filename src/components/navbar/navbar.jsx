import React from 'react';
import Magnetic from '../Magnetic/Magnetic';
import './navbar.scss';

export default function Navbar() {
  const navItems = [
    { title: 'Home' },
    { title: 'Company' },
    { 
      title: 'Packages', 
      dropdown: ['Domestic tours', 'International Tours', 'Customized Tours'] 
    },
    { title: 'Visa & Passport' },
    { title: 'Contact Us' }
  ];

  return (
    <nav className="navbar">
      <Magnetic intensity={0.2}>
        <div className="logo" data-cursor="hover">
          {/* REPLACE the text span with an img tag */}
          <img src="src/assets/images/logo/logo.png" alt="Stelle Tours & Forex" className="brand-logo" />
        </div>
      </Magnetic>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index} className={item.dropdown ? 'has-dropdown' : ''}>
            
            <Magnetic intensity={0.4}>
              <div className="nav-item" data-cursor="hover">
                <span>{item.title}</span>
                {item.dropdown && (
                  <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </Magnetic>

            {item.dropdown && (
              <ul className="dropdown-menu">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <div className="dropdown-item" data-cursor="hover">
                      <span>{subItem}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            
          </li>
        ))}
      </ul>
    </nav>
  );
}