import React from 'react';
import './HomeIntro.scss';

const HomeIntro = () => {
  return (
    <section className="home-intro" id="company">
      <div className="intro-container">
        
        {/* Left Side: The Text Teaser */}
        <div className="intro-text">
          <h4 className="section-subtitle">Welcome to Stelle</h4>
          <h2 className="section-title">
            Seamless travel.<br />
            <span className="serif-text">Borderless luxury.</span>
          </h2>
          <p className="intro-paragraph">
            We don't just book trips; we orchestrate experiences. From curating bespoke international itineraries to seamlessly handling your passports, visas, and foreign exchange, Stelle is your complete gateway to the world.
          </p>
          
          <a href="#company-page" className="text-link">
            Discover our story
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Right Side: Editorial Image Grid */}
        <div className="intro-images">
          {/* Replace these src paths with your actual images later */}
          <div className="image-wrapper img-back">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" alt="Luxury Flight" />
          </div>
          <div className="image-wrapper img-front">
            <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop" alt="Foreign Exchange and Passport" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeIntro;