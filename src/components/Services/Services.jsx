import React from 'react';
import './Services.scss';

const Services = () => {
  const servicesData = [
    {
      id: '01',
      title: 'Domestic Tours',
      shortDesc: 'Curated international itineraries crafted to absolute perfection.',
      benefits: ['Custom Flight Routing', 'Luxury Accommodations', 'Private Transfers'],
      /* NEW: Add your image paths here */
      image: '/images/services/domestic.png', 
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M2 12H22" />
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'International Tours',
      shortDesc: 'Seamless border transitions and comprehensive document management.',
      benefits: ['Priority Processing', 'Embassy Appointments', 'Document Verification'],
      image: '/images/services/international.png',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <path d="M12 11V16" />
          <path d="M8 11V16" />
          <path d="M16 11V16" />
          <path d="M4 8H20" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Visa & Passport',
      shortDesc: 'Secure, competitive, and highly efficient global currency exchange.',
      benefits: ['Premium Rates', 'Multi-Currency Cards', 'Immediate Liquidity'],
      image: '/images/services/docs.png',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M12 1V23" />
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" />
        </svg>
      )
    }
  ];

  return (
    <section className="services-reveal-section" id="services">
      <div className="services-header">
        <h4 className="subtitle">Comprehensive Solutions</h4>
        <h2 className="title">Seamlessly Managed.</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="reveal-card" key={service.id}>
            
            {/* NEW: Background Image and Dark Overlay */}
            <div 
              className="card-bg-image" 
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="card-overlay"></div>

            <div className="card-content">
              {/* Top Section (Always Visible) */}
              <div className="card-top">
                <span className="card-number">{service.id}</span>
                <div className="icon-wrapper">{service.icon}</div>
              </div>
              
              {/* Bottom Section (Title always visible, details reveal on hover) */}
              <div className="card-bottom">
                <h3 className="card-title">{service.title}</h3>
                
                {/* Hidden Details that slide up */}
                <div className="hidden-details">
                  <p className="card-desc">{service.shortDesc}</p>
                  
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button className="book-now-btn">
                    <span>Explore Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Explore All Services Button */}
      <div className="services-footer">
        <button className="explore-fill-btn">
          <span className="btn-text">Explore All Services</span>
          <span className="btn-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
      
    </section>
  );
};

export default Services;