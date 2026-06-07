import React, { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Triggers the text animation smoothly after the component mounts
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
      <div className={`hero-content ${isLoaded ? 'is-visible' : ''}`}>
        <h1>
          {/* Wrapped your existing classes inside the animation masks */}
          <span className="word-mask">
            <span className="word slim-serif">Explore the </span>
          </span>
          <span className="word-mask">
            <span className="word bold-sans">extraordinary</span>
          </span>
        </h1>
        
        {/* Wrapped the button so its hover effects stay perfectly intact */}
        <div className="hero-actions">
          <button className="cta-button">
            <span>Start your journey</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;