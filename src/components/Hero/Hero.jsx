import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      {/* The Cinematic Background */}
      <div className="hero-video-wrapper">
        <video 
          src="/videos/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline /* CRUCIAL for auto-playing on iPhones */
          className="background-video"
        />
        {/* The dark overlay ensures white text is always readable */}
        <div className="video-overlay"></div>
      </div>

      {/* Your Existing Content */}
      <div className="hero-content">
        <h1>
          <span className="slim-serif">Explore the </span>
          <span className="bold-sans">extraordinary</span>
        </h1>
        
        <button className="cta-button">
          <span>Start your journey</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;