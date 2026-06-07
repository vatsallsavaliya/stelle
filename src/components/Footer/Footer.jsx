import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="stelle-footer" id="contact">
      <div className="footer-container">
        
        {/* --- TIER 1: The Massive CTA --- */}
        <div className="footer-cta-section">
          <h2 className="cta-heading">
            <span className="line">Ready to elevate</span>
            <span className="line italic">your journey?</span>
          </h2>
          <button className="cta-button-massive">
            <span>Let's Talk</span>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* --- TIER 2: The Navigation Grid --- */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="grid-col brand-col">
            <h3 className="brand-logo">Stelle</h3>
            <p className="brand-desc">
              Bespoke travel itineraries, seamless global visas, and premium foreign exchange. Experience the world without friction.
            </p>
            <div className="contact-info">
              <a href="mailto:hello@stelletours.com" className="hover-link">hello@stelletours.com</a>
              <a href="tel:+910000000000" className="hover-link">+91 000 000 0000</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid-col">
            <h4 className="col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="hover-link">Home</a></li>
              <li><a href="#company" className="hover-link">Company</a></li>
              <li><a href="#packages" className="hover-link">Packages</a></li>
              <li><a href="#visa" className="hover-link">Visa & Passport</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="grid-col">
            <h4 className="col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#tours" className="hover-link">Bespoke Tours</a></li>
              <li><a href="#visas" className="hover-link">Global Visas</a></li>
              <li><a href="#forex" className="hover-link">Foreign Exchange</a></li>
              <li><a href="#corporate" className="hover-link">Corporate Travel</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="grid-col">
            <h4 className="col-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="#instagram" className="hover-link">Instagram</a></li>
              <li><a href="#linkedin" className="hover-link">LinkedIn</a></li>
              <li><a href="#facebook" className="hover-link">Facebook</a></li>
              <li><a href="#twitter" className="hover-link">Twitter</a></li>
            </ul>
          </div>

        </div>

        {/* --- TIER 3: The Legal Baseline --- */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Stelle Tours & Forex Pvt. Ltd. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy" className="hover-link">Privacy Policy</a>
            <a href="#terms" className="hover-link">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;