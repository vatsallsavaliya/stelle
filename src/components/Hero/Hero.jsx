import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic/Magnetic';
import './Hero.scss';

export default function Hero() {
  const containerRef = useRef(null);
  
  // High-end placeholder images (Travel + Global Finance/Cities)
  const images = [
  'src/assets/images/hero/1.jpg',
  'src/assets/images/hero/2.jpg',
  'src/assets/images/hero/3.jpg',
  'src/assets/images/hero/4.jpg',
  'src/assets/images/hero/5.jpg',
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;
    let lastPosition = { x: 0, y: 0 };
    const distanceThreshold = 100; 

    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const handleMouseMove = (e) => {
      // Calculate mouse position strictly relative to the Hero container
      // This prevents the images from breaking if you scroll the page
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const distance = calculateDistance(lastPosition.x, lastPosition.y, x, y);
      
      if (distance > distanceThreshold) {
        lastPosition = { x, y };
        spawnImage(x, y);
      }
    };

    const spawnImage = (x, y) => {
      const img = document.createElement('img');
      img.src = images[currentIndex];
      img.className = 'trail-image';
      
      container.appendChild(img);
      currentIndex = (currentIndex + 1) % images.length;
      
      const imgWidth = 250;
      const imgHeight = 350;
      const randomRotation = Math.random() * 30 - 15; 

      gsap.set(img, {
        x: x - imgWidth / 2,
        y: y - imgHeight / 2,
        scale: 0.2,
        opacity: 0,
        rotation: randomRotation
      });

      const tl = gsap.timeline({
        onComplete: () => {
          if (container.contains(img)) {
            container.removeChild(img);
          }
        }
      });

      tl.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'power3.out'
      })
      .to(img, {
        scale: 0.5,
        opacity: 0,
        y: '+=100', 
        duration: 0.2,
        ease: 'power2.inOut'
      }, "+=0.05"); 
    };

    // FIX: Attach listener directly to the container, not the window!
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      // FIX: Clean up the listener from the container
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // End of useEffect

  return (
    <section className="hero-section" ref={containerRef}>
      {/* pointer-events: none ensures the text doesn't block 
        the mouse movements from triggering the trail 
      */}
      <div className="hero-text" style={{ pointerEvents: 'none' }}>
        <h1 data-cursor="hover">Explore The World.</h1>
        <h1 data-cursor="hover" className="offset-text">Trade With Trust.</h1>

        {/* ADD THIS: The new Magnetic CTA Button */}
        {/* pointerEvents: 'auto' is required here because the parent has it set to 'none' to allow the image trail to work */}
        <div className="hero-cta" style={{ pointerEvents: 'auto' }}>
          <Magnetic intensity={0.4}>
            <button className="cta-button" data-cursor="hover">
              <span>Start Your Journey</span>
            </button>
          </Magnetic>
        </div>
        
      </div>
    </section>
  );
}