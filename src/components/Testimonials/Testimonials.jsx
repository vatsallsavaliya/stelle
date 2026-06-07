import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  // Column 1 Data
  const col1 = [
    { text: "Transformed our online presence completely. Their digital marketing strategy increased inquiries by 300% in just three months. Exceptional results!", author: "Vin Immigration", service: "Complete Digital Marketing" },
    { text: "Outstanding services! Their data-driven approach significantly boosted our brand visibility and ROI. A highly professional team.", author: "Avadh Silver Cast", service: "Complete Digital Marketing" },
    { text: "The team delivered an outstanding platform that increased our sales overnight. Highly recommended.", author: "Stelle Tours", service: "Web Development" },
    { text: "Creative, fast, and extremely reliable. They understood our vision perfectly.", author: "Amar Metal", service: "Branding" }
  ];

  // Column 2 Data
  const col2 = [
    { text: "Their expertise took our brand to new heights. Online sales tripled thanks to their flawless execution across all digital channels.", author: "Frankyfill", service: "Complete Digital Marketing" },
    { text: "The design and video quality is outstanding. They captured our brand essence perfectly with quick turnaround times and great attention to detail.", author: "El Manana PTV Ltd", service: "Graphic & Video Editing" },
    { text: "Strategic, insightful, and results-oriented. They completely transformed our social media presence.", author: "Grafizen International", service: "Social Media Management" },
    { text: "A phenomenal partner for our digital growth. The ROI has been incredible.", author: "TechFlow", service: "PPC Advertising" }
  ];

  // Column 3 Data
  const col3 = [
    { text: "Remarkable branding and packaging. They created a cohesive identity that perfectly represents our heritage and enhances customer perception.", author: "Sat Siddham Ayurvedashram", service: "Branding & Packaging" },
    { text: "Professional video services beyond compare. They delivered powerful marketing assets that consistently attract new clients.", author: "Sai Darshti Enterprise", service: "Professional Video Services" },
    { text: "Beautiful UI/UX design that completely modernized our app. The user feedback has been overwhelmingly positive.", author: "FinTech Pro", service: "UI/UX Design" },
    { text: "They handle our entire digital ecosystem with incredible efficiency and creativity.", author: "Global Traders", service: "Complete Digital Marketing" }
  ];

  // The engine of the infinite scroll: renders the list twice to create the seamless loop
  const MarqueeColumn = ({ data, reverse, speed }) => (
    <div className="marquee-column">
      <div 
        className={`marquee-track ${reverse ? 'reverse' : ''}`} 
        style={{ animationDuration: speed }}
      >
        {/* Original Block */}
        <div className="marquee-content">
          {data.map((item, i) => (
            <div className="review-card" key={`orig-${i}`}>
              <p className="review-text">{item.text}</p>
              <div className="review-meta">
                <span className="author">{item.author}</span>
                <span className="service">{item.service}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cloned Block (Hidden from screen readers to prevent duplication) */}
        <div className="marquee-content" aria-hidden="true">
          {data.map((item, i) => (
            <div className="review-card clone" key={`clone-${i}`}>
              <p className="review-text">{item.text}</p>
              <div className="review-meta">
                <span className="author">{item.author}</span>
                <span className="service">{item.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section" id="testimonials">
      
      {/* --- THE HEADER BLOCK --- */}
      <div className="section-header">
        <h2 className="title">Transforming digital presence.</h2>
        <p className="subtitle">Real results from our global partners.</p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-grid">
          {/* Column 1: Scrolls Up */}
          <MarqueeColumn data={col1} speed="40s" />
          
          {/* Column 2: Scrolls Down (Reverse) */}
          <MarqueeColumn data={col2} reverse speed="45s" />
          
          {/* Column 3: Scrolls Up */}
          <MarqueeColumn data={col3} speed="42s" />
        </div>
      </div>

    </section>
  );
};

export default Testimonials;